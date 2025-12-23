import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Testimonial from '@/models/Testimonial';
import Project from '@/models/Project';

/**
 * Test endpoint to verify database connection
 * GET /api/test-connection
 */
export async function GET(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Test getting counts from each collection
    const userCount = await User.countDocuments();
    const testimonialCount = await Testimonial.countDocuments();
    const projectCount = await Project.countDocuments();

    return NextResponse.json({
      success: true,
      message: '✅ Database connected successfully!',
      database: {
        connected: true,
        collections: {
          users: userCount,
          testimonials: testimonialCount,
          projects: projectCount,
        },
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      {
        success: false,
        message: '❌ Database connection failed',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
