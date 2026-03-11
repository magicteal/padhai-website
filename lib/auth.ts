import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '@/models/User';

/**
 * Lazy getter – defers the JWT_SECRET check to request time so that
 * `next build` (which evaluates route modules at build) doesn't crash
 * when environment variables haven't been injected yet (e.g. Docker build).
 */
function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET || '';
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }
  return secret;
}

/**
 * Hash password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

/**
 * Compare password with hashed password
 */
export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

/**
 * Generate JWT token
 */
export function generateToken(userId: string, role: 'user' | 'admin'): string {
  return jwt.sign(
    { userId, role },
    getJwtSecret(),
    { expiresIn: '30d' }
  );
}

/**
 * Verify JWT token
 */
export function verifyToken(token: string): { userId: string; role: 'user' | 'admin' } | null {
  try {
    const decoded = jwt.verify(token, getJwtSecret()) as { userId: string; role: 'user' | 'admin' };
    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Check if user is admin
 */
export function isAdmin(user: IUser | null): boolean {
  return user?.role === 'admin';
}
