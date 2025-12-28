import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';

export const runtime = 'nodejs';

// GET - Fetch all testimonials or filter by query params
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const approved = searchParams.get('approved');
    const limit = searchParams.get('limit');

    // Build query
    const query: Record<string, any> = {};
    
    if (featured === 'true') {
      query.featured = true;
    }
    if (approved !== null) {
      query.approved = approved === 'true';
    }

    let testimonialsQuery = Testimonial.find(query).sort({ createdAt: -1 });
    
    if (limit) {
      testimonialsQuery = testimonialsQuery.limit(parseInt(limit));
    }

    const testimonials = await testimonialsQuery.lean();

    // Transform _id to id for frontend compatibility
    const transformedTestimonials = testimonials.map((testimonial: any) => ({
      ...testimonial,
      id: testimonial._id.toString(),
      _id: undefined,
    }));

    return NextResponse.json({ success: true, data: transformedTestimonials });
  } catch (error: any) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

// POST - Create a new testimonial
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const testimonial = new Testimonial(body);
    await testimonial.save();
    const testimonialObj = testimonial.toObject();

    return NextResponse.json(
      { 
        success: true, 
        data: { 
          ...testimonialObj, 
          id: testimonialObj._id.toString(),
          _id: undefined 
        } 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
