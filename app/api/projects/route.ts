import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';

export const runtime = 'nodejs';

// GET - Fetch all projects or filter by query params
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const approved = searchParams.get('approved');
    const limit = searchParams.get('limit');

    // Build query
    const query: Record<string, any> = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    if (featured === 'true') {
      query.featured = true;
    }
    if (approved !== null) {
      query.approved = approved === 'true';
    }

    let projectsQuery = Project.find(query).sort({ createdAt: -1 });
    
    if (limit) {
      projectsQuery = projectsQuery.limit(parseInt(limit));
    }

    const projects = await projectsQuery.lean();

    // Transform _id to id for frontend compatibility
    const transformedProjects = projects.map((project: any) => ({
      ...project,
      id: project._id.toString(),
      _id: undefined,
    }));

    return NextResponse.json({ success: true, data: transformedProjects });
  } catch (error: any) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST - Create a new project
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const project = new Project(body);
    await project.save();
    const projectObj = project.toObject();

    return NextResponse.json(
      { 
        success: true, 
        data: { 
          ...projectObj, 
          id: projectObj._id.toString(),
          _id: undefined 
        } 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create project' },
      { status: 500 }
    );
  }
}
