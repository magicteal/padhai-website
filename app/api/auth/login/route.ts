import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { comparePassword, generateToken, hashPassword } from '@/lib/auth';

/**
 * POST /api/auth/login
 * Login for both users and admins
 */
export async function POST(request: NextRequest) {
  try {
    const startedAt = Date.now();
    const maskPassword = (value: unknown) => {
      if (typeof value !== 'string') return { provided: false };
      const trimmed = value;
      const len = trimmed.length;
      if (len === 0) return { provided: true, length: 0, masked: '' };
      const masked = len <= 2 ? '*'.repeat(len) : `${trimmed[0]}${'*'.repeat(len - 2)}${trimmed[len - 1]}`;
      return { provided: true, length: len, masked };
    };

    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const password = typeof body?.password === 'string' ? body.password : '';

    console.log('[auth/login] Incoming request body:', {
      email,
      password: maskPassword(body?.password),
    });

    // Validation
    if (!email || !password) {
      console.log('[auth/login] Validation failed: missing email or password', {
        hasEmail: Boolean(email),
        hasPassword: Boolean(password),
      });
      return NextResponse.json(
        { success: false, message: 'Please provide email and password' },
        { status: 400 }
      );
    }

    // Connect to database
    console.log('[auth/login] Connecting to MongoDB...');
    await connectDB();
    console.log('[auth/login] MongoDB connected');

    const enableDevAdmin =
      process.env.NODE_ENV !== 'production' && process.env.ENABLE_DEV_ADMIN === 'true';

    const devAdminEmail = (process.env.DEV_ADMIN_EMAIL || 'admin@padhai.com')
      .trim()
      .toLowerCase();
    const devAdminPassword = process.env.DEV_ADMIN_PASSWORD || 'admin123';

    console.log('[auth/login] Dev admin bootstrap flags:', {
      enableDevAdmin,
      env: process.env.NODE_ENV,
      devAdminEmail,
      matchesDevAdminEmail: email === devAdminEmail,
      matchesDevAdminPassword: password === devAdminPassword,
    });

    // Find user by email
    let user = await User.findOne({ email });
    console.log('[auth/login] User lookup result:', user ? { found: true, id: user._id?.toString?.(), role: user.role } : { found: false });

    // Optional: bootstrap a dev admin user for local development.
    // This is opt-in via ENABLE_DEV_ADMIN=true and never runs in production.
    if (enableDevAdmin && email === devAdminEmail && password === devAdminPassword) {
      console.log('[auth/login] Dev admin login attempt matched configured credentials');
      if (!user) {
        console.log('[auth/login] Dev admin user not found; creating new admin user');
        const hashedPassword = await hashPassword(devAdminPassword);
        user = await User.create({
          name: 'Admin',
          email: devAdminEmail,
          password: hashedPassword,
          role: 'admin',
        });
        console.log('[auth/login] Dev admin user created:', { id: user._id?.toString?.(), role: user.role });
      } else {
        // Ensure the dev admin user has admin role and the configured password.
        const needsRoleFix = user.role !== 'admin';
        const passwordMatches = await comparePassword(devAdminPassword, user.password);

        console.log('[auth/login] Dev admin user exists; ensuring role/password:', {
          id: user._id?.toString?.(),
          needsRoleFix,
          passwordMatches,
        });

        if (needsRoleFix || !passwordMatches) {
          user.role = 'admin';
          user.password = await hashPassword(devAdminPassword);
          await user.save();
          console.log('[auth/login] Dev admin user updated (role/password)');
        } else {
          console.log('[auth/login] Dev admin user already correct; no update needed');
        }
      }
    }

    if (!user) {
      console.log('[auth/login] Rejecting login: user not found', { email });
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await comparePassword(password, user.password);
    console.log('[auth/login] Password comparison result:', {
      email,
      userId: user._id?.toString?.(),
      match: isPasswordValid,
    });

    if (!isPasswordValid) {
      console.log('[auth/login] Rejecting login: password mismatch', { email, userId: user._id?.toString?.() });
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user._id.toString(), user.role);
    console.log('[auth/login] Login successful; token generated', {
      userId: user._id?.toString?.(),
      role: user.role,
      durationMs: Date.now() - startedAt,
    });

    // Prepare user data (exclude password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      avatar: user.avatar,
      childName: user.childName,
      childAge: user.childAge,
    };

    // Set cookie
    const response = NextResponse.json({
      success: true,
      message: user.role === 'admin' ? 'Admin login successful' : 'Login successful',
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
    console.error('[auth/login] Login error caught:', {
      message: error?.message,
      name: error?.name,
      stack: error?.stack,
      cause: error?.cause,
    });
    return NextResponse.json(
      { success: false, message: 'Login failed', error: error.message },
      { status: 500 }
    );
  }
}
