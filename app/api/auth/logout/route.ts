import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/auth/logout
 * Logout user by clearing auth cookie
 */
export async function POST(request: NextRequest) {
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  });

  // Clear auth cookie
  response.cookies.delete('auth-token');

  return response;
}
