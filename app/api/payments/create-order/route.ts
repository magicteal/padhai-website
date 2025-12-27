import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Purchase from '@/models/Purchase';
import Razorpay from 'razorpay';

type Body = {
  amount: number; // in rupees
  currency?: string;
  courseId: string;
  courseName: string;
  name?: string;
  email?: string;
  phone?: string;
  userId?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    const { amount, currency = 'INR', courseId, courseName, name, email, phone, userId } = body;

    if (!amount || !courseId || !courseName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      return NextResponse.json({ error: 'Razorpay keys not configured' }, { status: 500 });
    }

    const razorpay = new Razorpay({ key_id, key_secret });

    const amountPaise = Math.round(amount * 100);

    // create order in razorpay
    const order = await razorpay.orders.create({
      amount: amountPaise,
      currency,
      receipt: `rcpt_${Date.now()}`,
      payment_capture: true,
    });

    // persist a purchase record with status 'created'
    await connectDB();

    // If userId is present, check if already enrolled in this course
    if (userId) {
      const User = (await import('@/models/User')).default;
      const existingUser = await User.findById(userId).lean();
      if (existingUser && Array.isArray(existingUser.enrolledCourses)) {
        const already = existingUser.enrolledCourses.some((c: any) => c.courseId === courseId);
        if (already) {
          return NextResponse.json({ error: 'User already enrolled in this course' }, { status: 400 });
        }
      }
    }

    const purchase = new Purchase({
      userId,
      name,
      email,
      phone,
      courseId,
      courseName,
      amount: amountPaise,
      currency,
      razorpayOrderId: order.id,
      status: 'created',
      meta: { createdAt: new Date().toISOString() },
    });

    await purchase.save();

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: key_id,
      purchaseId: purchase._id,
    });
  } catch (err: any) {
    console.error('create-order error', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
