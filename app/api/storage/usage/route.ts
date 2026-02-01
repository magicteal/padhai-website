import { NextResponse } from 'next/server';
import { getStorageUsage, formatBytes, getLargestFiles, BUCKETS } from '@/lib/supabase';

export async function GET() {
  try {
    const usage = await getStorageUsage();

    // Get largest files for potential cleanup recommendations
    const largestProjects = await getLargestFiles(BUCKETS.PROJECTS, 5);
    const largestTestimonials = await getLargestFiles(BUCKETS.TESTIMONIALS, 5);

    return NextResponse.json({
      success: true,
      usage: {
        used: usage.used,
        usedFormatted: formatBytes(usage.used),
        limit: usage.limit,
        limitFormatted: formatBytes(usage.limit),
        remaining: usage.remaining,
        remainingFormatted: formatBytes(usage.remaining),
        percentage: usage.percentage,
        isWarning: usage.isWarning,
        isCritical: usage.isCritical,
        estimatedMonths: usage.estimatedMonths,
      },
      largestFiles: {
        projects: largestProjects,
        testimonials: largestTestimonials,
      },
      tips: usage.isCritical 
        ? ['URGENT: Delete old/unused files immediately!', 'Consider compressing existing images']
        : usage.isWarning
        ? ['Consider cleaning up old files', 'Reduce image upload size']
        : ['Storage usage is healthy'],
    });
  } catch (error) {
    console.error('Storage usage check failed:', error);

    return NextResponse.json(
      { error: 'Failed to get storage usage' },
      { status: 500 }
    );
  }
}
