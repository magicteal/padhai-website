import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, generateToken } from '@/lib/auth';

/**
 * POST /api/auth/signup
 * Register new user (only for regular users, not admin)
 */
export async function POST(request: NextRequest) {
  try {
    const { name, email, password, phone, childName, childAge } = await request.json();

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide name, email, and password' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists with this email' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      phone,
      role: 'user',
      childName,
      childAge: childAge ? parseInt(childAge) : undefined,
    });

    // Generate JWT token
    const token = generateToken(user._id.toString(), user.role);

    // Prepare user data (exclude password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      childName: user.childName,
      childAge: user.childAge,
    };

    // Set cookie
    const response = NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: userData,
      token,
    });

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { success: false, message: 'Registration failed', error: error.message },
      { status: 500 }
    );
  }
}
