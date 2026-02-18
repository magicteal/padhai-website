import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
import { uploadImage, STORAGE_BUCKETS, STORAGE_LIMITS } from '@/lib/media-storage';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 400 }
      );
    }

    // SIZE LIMIT
    if (file.size > STORAGE_LIMITS.MAX_IMAGE_SIZE) {
      return NextResponse.json(
        { error: `Max file size allowed is ${STORAGE_LIMITS.MAX_IMAGE_SIZE / 1024}KB. Please compress your image.` },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadImage(buffer, STORAGE_BUCKETS.PROJECTS, file.name);

    return NextResponse.json({
      url: result.url,
      path: result.path,
      size: result.size
    });

  } catch (error) {
    console.error('Upload Error:', error);
    const msg = (error as any)?.message || String(error);
    return NextResponse.json(
      { error: msg },
      { status: 500 }
    );
  }
}
