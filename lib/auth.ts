import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || '';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
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
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

/**
 * Verify JWT token
 */
export function verifyToken(token: string): { userId: string; role: 'user' | 'admin' } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: 'user' | 'admin' };
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
