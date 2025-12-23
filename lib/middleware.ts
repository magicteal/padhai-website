import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';
import User from '@/models/User';
import connectDB from './mongodb';

/**
 * Get current user from request cookies
 */
export async function getCurrentUser(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return null;
    }

    await connectDB();
    const user = await User.findById(decoded.userId).select('-password').lean();

    return user;
  } catch (error) {
    return null;
  }
}

/**
 * Middleware to protect routes (require authentication)
 */
export async function requireAuth(request: NextRequest) {
  const user = await getCurrentUser(request);

  if (!user) {
    return NextResponse.json(
      { success: false, message: 'Authentication required' },
      { status: 401 }
    );
  }

  return user;
}

/**
 * Middleware to protect admin routes
 */
export async function requireAdmin(request: NextRequest) {
  const user = await getCurrentUser(request);

  if (!user) {
    return NextResponse.json(
      { success: false, message: 'Authentication required' },
      { status: 401 }
    );
  }

  if (user.role !== 'admin') {
    return NextResponse.json(
      { success: false, message: 'Admin access required' },
      { status: 403 }
    );
  }

  return user;
}
