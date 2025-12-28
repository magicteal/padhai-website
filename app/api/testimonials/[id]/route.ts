import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import mongoose from 'mongoose';

export const runtime = 'nodejs';

// GET - Fetch a single testimonial by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid testimonial ID' },
        { status: 400 }
      );
    }

    const testimonial = await Testimonial.findById(id).lean();

    if (!testimonial) {
      return NextResponse.json(
        { success: false, error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...testimonial,
        id: (testimonial as any)._id.toString(),
        _id: undefined,
      },
    });
  } catch (error: any) {
    console.error('Error fetching testimonial:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch testimonial' },
      { status: 500 }
    );
  }
}

// PUT - Update a testimonial by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid testimonial ID' },
        { status: 400 }
      );
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    ).lean();

    if (!testimonial) {
      return NextResponse.json(
        { success: false, error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...testimonial,
        id: (testimonial as any)._id.toString(),
        _id: undefined,
      },
    });
  } catch (error: any) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a testimonial by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid testimonial ID' },
        { status: 400 }
      );
    }

    const testimonial = await Testimonial.findByIdAndDelete(id);

    if (!testimonial) {
      return NextResponse.json(
        { success: false, error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Testimonial deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}
