import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

/**
 * GET /api/users
 * List all users (for testing/admin purposes)
 */
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get all users (exclude passwords)
    const users = await User.find({}).select('-password').sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: users.length,
      users: users,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch users', error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
