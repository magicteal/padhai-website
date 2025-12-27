import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/mongodb';
import Purchase from '@/models/Purchase';
import User from '@/models/User';

type Body = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  purchaseId?: string;
  meta?: Record<string, any>;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, purchaseId, meta } = body;

    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (!key_secret) {
      return NextResponse.json({ error: 'Razorpay secret not configured' }, { status: 500 });
    }

    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const valid = generated_signature === razorpay_signature;

    await connectDB();

    if (!purchaseId) {
      // Try to find by razorpayOrderId
      const p = await Purchase.findOne({ razorpayOrderId: razorpay_order_id });
      if (p) {
        if (valid) {
          p.status = 'paid';
          p.razorpayPaymentId = razorpay_payment_id;
          p.razorpaySignature = razorpay_signature;
          if (meta) p.meta = { ...(p.meta || {}), ...meta };
          await p.save();

          // Add enrollment to user if userId present
          if (p.userId) {
            const u = await User.findById(p.userId);
            if (u) {
              const exists = Array.isArray(u.enrolledCourses) && u.enrolledCourses.some((c: any) => c.courseId === p.courseId);
              if (!exists) {
                u.enrolledCourses = u.enrolledCourses || [];
                u.enrolledCourses.push({
                  courseId: p.courseId,
                  courseName: p.courseName,
                  purchaseId: p._id?.toString ? p._id.toString() : String(p._id),
                  purchasedAt: new Date(),
                });
                await u.save();
              }
            }
          }
        } else {
          p.status = 'failed';
          await p.save();
        }
      }
    } else {
      const p = await Purchase.findById(purchaseId);
      if (p) {
        if (valid) {
          p.status = 'paid';
          p.razorpayPaymentId = razorpay_payment_id;
          p.razorpaySignature = razorpay_signature;
          if (meta) p.meta = { ...(p.meta || {}), ...meta };
          await p.save();

          // Add enrollment to user if userId present
          if (p.userId) {
            const u = await User.findById(p.userId);
            if (u) {
              const exists = Array.isArray(u.enrolledCourses) && u.enrolledCourses.some((c: any) => c.courseId === p.courseId);
              if (!exists) {
                u.enrolledCourses = u.enrolledCourses || [];
                u.enrolledCourses.push({
                  courseId: p.courseId,
                  courseName: p.courseName,
                  purchaseId: p._id?.toString ? p._id.toString() : String(p._id),
                  purchasedAt: new Date(),
                });
                await u.save();
              }
            }
          }
        } else {
          p.status = 'failed';
          await p.save();
        }
      }
    }

    if (!valid) {
      return NextResponse.json({ valid: false }, { status: 400 });
    }

    return NextResponse.json({ valid: true });
  } catch (err: any) {
    console.error('verify error', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
