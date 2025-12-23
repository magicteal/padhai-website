/**
 * Database utility functions for common operations
 */

import User from '@/models/User';
import Testimonial from '@/models/Testimonial';
import Project from '@/models/Project';
import connectDB from './mongodb';

/**
 * Get all approved testimonials
 */
export async function getApprovedTestimonials(limit?: number) {
  await connectDB();
  const query = Testimonial.find({ approved: true }).sort({ createdAt: -1 });
  if (limit) query.limit(limit);
  return await query.lean();
}

/**
 * Get featured testimonials
 */
export async function getFeaturedTestimonials() {
  await connectDB();
  return await Testimonial.find({ approved: true, featured: true })
    .sort({ createdAt: -1 })
    .lean();
}

/**
 * Get all approved projects
 */
export async function getApprovedProjects(category?: string, limit?: number) {
  await connectDB();
  const filter: any = { approved: true };
  if (category && category !== 'All') {
    filter.category = category;
  }
  const query = Project.find(filter).sort({ createdAt: -1 });
  if (limit) query.limit(limit);
  return await query.lean();
}

/**
 * Get featured projects
 */
export async function getFeaturedProjects(limit: number = 6) {
  await connectDB();
  return await Project.find({ approved: true, featured: true })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
}

/**
 * Get project by ID
 */
export async function getProjectById(id: string) {
  await connectDB();
  return await Project.findById(id).lean();
}

/**
 * Increment project views
 */
export async function incrementProjectViews(id: string) {
  await connectDB();
  return await Project.findByIdAndUpdate(
    id,
    { $inc: { views: 1 } },
    { new: true }
  ).lean();
}

/**
 * Toggle project like
 */
export async function toggleProjectLike(id: string, increment: boolean) {
  await connectDB();
  return await Project.findByIdAndUpdate(
    id,
    { $inc: { likes: increment ? 1 : -1 } },
    { new: true }
  ).lean();
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string) {
  await connectDB();
  return await User.findOne({ email: email.toLowerCase() }).lean();
}

/**
 * Get user by ID
 */
export async function getUserById(id: string) {
  await connectDB();
  return await User.findById(id).select('-password').lean();
}

/**
 * Get all users (admin only)
 */
export async function getAllUsers() {
  await connectDB();
  return await User.find().select('-password').sort({ createdAt: -1 }).lean();
}

/**
 * Get statistics for admin dashboard
 */
export async function getAdminStats() {
  await connectDB();
  
  const [
    totalUsers,
    totalProjects,
    totalTestimonials,
    pendingProjects,
    pendingTestimonials,
    featuredProjects,
  ] = await Promise.all([
    User.countDocuments(),
    Project.countDocuments({ approved: true }),
    Testimonial.countDocuments({ approved: true }),
    Project.countDocuments({ approved: false }),
    Testimonial.countDocuments({ approved: false }),
    Project.countDocuments({ approved: true, featured: true }),
  ]);

  return {
    totalUsers,
    totalProjects,
    totalTestimonials,
    pendingProjects,
    pendingTestimonials,
    featuredProjects,
  };
}
