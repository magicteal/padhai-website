import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/middleware';

/**
 * GET /api/auth/me
 * Get current logged in user
 */
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        avatar: user.avatar,
        childName: user.childName,
        childAge: user.childAge,
        enrolledCourses: user.enrolledCourses || [],
      },
    });
  } catch (error: any) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get user', error: error.message },
      { status: 500 }
    );
  }
}
