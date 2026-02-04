import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl) console.error('Missing NEXT_PUBLIC_SUPABASE_URL');
if (!supabaseAnonKey) console.error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY');
if (!supabaseServiceKey) console.error('Missing SUPABASE_SERVICE_ROLE_KEY');

// Client for public operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations (uploads, deletes)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Storage bucket names
export const BUCKETS = {
  PROJECTS: 'projects',
  TESTIMONIALS: 'testimonials',
  VIDEOS: 'videos',
} as const;

// ============================================
// FREE PLAN OPTIMIZATION CONSTANTS (1GB limit)
// ============================================
// Target: 6 months of operation
// Strategy: Aggressive compression + size limits

export const STORAGE_LIMITS = {
  // Max file sizes (aggressive to save space)
  MAX_IMAGE_SIZE: 500 * 1024,      // 500KB max per image (was 2MB)
  MAX_VIDEO_SIZE: 10 * 1024 * 1024, // 10MB max per video
  
  // Target dimensions (smaller = less storage)
  IMAGE_MAX_WIDTH: 800,
  IMAGE_MAX_HEIGHT: 1200,
  
  // Quality settings
  IMAGE_QUALITY: 0.7,  // 70% quality for JPEG/WebP
  
  // Warn when approaching limits
  STORAGE_WARNING_THRESHOLD: 0.8,  // 80% = 800MB
  STORAGE_CRITICAL_THRESHOLD: 0.95, // 95% = 950MB
};

// ============================================
// UPLOAD FUNCTIONS
// ============================================

interface UploadResult {
  url: string;
  path: string;
  size: number;
}

/**
 * Upload an image to Supabase Storage with optimization
 * Images are stored in WebP format for best compression
 */
export const uploadImage = async (
  buffer: Buffer,
  bucket: string,
  filename?: string
): Promise<UploadResult> => {
  // Ensure bucket exists (try to create if missing)
  const ensureBucketExists = async (b: string) => {
    try {
      const { error } = await supabaseAdmin.storage.createBucket(b, {
        public: true,
        fileSizeLimit: b === BUCKETS.VIDEOS ? STORAGE_LIMITS.MAX_VIDEO_SIZE : STORAGE_LIMITS.MAX_IMAGE_SIZE,
      });
      if (error && !error.message.includes('already exists')) {
        console.warn(`Could not create bucket ${b}:`, error.message || error);
      }
    } catch (e) {
      console.warn(`createBucket failed for ${b}:`, e);
    }
  };

  await ensureBucketExists(bucket);
  // Generate unique filename with timestamp
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 8);
  const ext = 'webp'; // Always use WebP for best compression
  const finalFilename = filename 
    ? `${filename.replace(/\.[^/.]+$/, '')}_${randomId}.${ext}`
    : `img_${timestamp}_${randomId}.${ext}`;

  const { data, error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(finalFilename, buffer, {
      contentType: 'image/webp',
      cacheControl: '31536000', // 1 year cache (reduces bandwidth)
      upsert: false,
    });

  if (error) {
    console.error('Supabase upload error:', error);
    throw new Error(`Upload failed: ${error.message}`);
  }

  // Try to get a public URL; if the bucket is private, create a signed URL
  const { data: publicData } = supabaseAdmin.storage
    .from(bucket)
    .getPublicUrl(data.path);

  let finalUrl = publicData?.publicUrl || '';

  if (!finalUrl) {
    // Create a signed URL valid for 30 days as a fallback
    const expiresIn = 60 * 60 * 24 * 30; // 30 days
    const { data: signedData, error: signedError } = await supabaseAdmin.storage
      .from(bucket)
      .createSignedUrl(data.path, expiresIn);

    if (signedError) {
      console.error('Signed URL error:', signedError);
    } else if (signedData?.signedUrl) {
      finalUrl = signedData.signedUrl;
    }
  }

  return {
    url: finalUrl,
    path: data.path,
    size: buffer.length,
  };
};

/**
 * Upload a video to Supabase Storage
 */
export const uploadVideo = async (
  buffer: Buffer,
  bucket: string,
  filename?: string,
  contentType: string = 'video/mp4'
): Promise<UploadResult> => {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 8);
  const ext = contentType.includes('webm') ? 'webm' : 'mp4';
  const finalFilename = filename 
    ? `${filename.replace(/\.[^/.]+$/, '')}_${randomId}.${ext}`
    : `vid_${timestamp}_${randomId}.${ext}`;

  const { data, error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(finalFilename, buffer, {
      contentType,
      cacheControl: '31536000', // 1 year cache
      upsert: false,
    });

  if (error) {
    console.error('Supabase video upload error:', error);
    throw new Error(`Video upload failed: ${error.message}`);
  }

  const { data: publicData } = supabaseAdmin.storage
    .from(bucket)
    .getPublicUrl(data.path);

  let finalUrl = publicData?.publicUrl || '';

  if (!finalUrl) {
    const expiresIn = 60 * 60 * 24 * 30; // 30 days
    const { data: signedData, error: signedError } = await supabaseAdmin.storage
      .from(bucket)
      .createSignedUrl(data.path, expiresIn);

    if (signedError) {
      console.error('Signed URL error:', signedError);
    } else if (signedData?.signedUrl) {
      finalUrl = signedData.signedUrl;
    }
  }

  return {
    url: finalUrl,
    path: data.path,
    size: buffer.length,
  };
};

/**
 * Delete a file from Supabase Storage
 */
export const deleteFile = async (bucket: string, path: string): Promise<void> => {
  if (!path) return;

  const { error } = await supabaseAdmin.storage
    .from(bucket)
    .remove([path]);

  if (error) {
    console.error('Supabase delete error:', error);
    throw new Error(`Delete failed: ${error.message}`);
  }
};

/**
 * Delete multiple files from Supabase Storage
 */
export const deleteFiles = async (bucket: string, paths: string[]): Promise<void> => {
  if (!paths.length) return;

  const { error } = await supabaseAdmin.storage
    .from(bucket)
    .remove(paths);

  if (error) {
    console.error('Supabase batch delete error:', error);
    throw new Error(`Batch delete failed: ${error.message}`);
  }
};

// ============================================
// URL OPTIMIZATION (for existing URLs)
// ============================================

/**
 * Get optimized image URL using Supabase transforms
 * Note: Image transforms require Pro plan, but URLs work fine on free plan
 * For free plan, we serve original optimized images
 */
export const getOptimizedImageUrl = (
  url: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
  } = {}
): string => {
  // If not a Supabase URL, return as-is
  if (!url || !url.includes('supabase')) return url;
  
  // On free plan, Supabase doesn't have image transforms
  // We pre-optimize images during upload, so just return the URL
  // The cacheControl header handles CDN caching
  return url;
};

/**
 * Get optimized video URL
 * Videos are served as-is with CDN caching
 */
export const getOptimizedVideoUrl = (url: string): string => {
  // Return as-is - videos are cached via cacheControl header
  return url || '';
};

/**
 * Generate a video poster/thumbnail URL
 * Note: Supabase free plan doesn't generate thumbnails
 * You'll need to upload a separate thumbnail image or use a placeholder
 */
export const getVideoPosterUrl = (videoUrl: string): string => {
  // For Supabase, we can't auto-generate posters
  // Return empty string to use fallback poster
  return '';
};

// ============================================
// STORAGE MONITORING (Important for 1GB limit!)
// ============================================

interface StorageUsage {
  used: number;       // bytes used
  limit: number;      // 1GB in bytes
  percentage: number; // 0-100
  isWarning: boolean;
  isCritical: boolean;
  remaining: number;  // bytes remaining
  estimatedMonths: number; // estimated months at current rate
}

/**
 * Get current storage usage
 * IMPORTANT: Call this regularly to monitor your 1GB limit!
 */
export const getStorageUsage = async (): Promise<StorageUsage> => {
  const TOTAL_LIMIT = 1024 * 1024 * 1024; // 1GB
  
  let totalUsed = 0;

  // Get usage for each bucket
  for (const bucket of Object.values(BUCKETS)) {
    try {
      const { data: files, error } = await supabaseAdmin.storage
        .from(bucket)
        .list('', { limit: 1000 });
      
      if (!error && files) {
        for (const file of files) {
          if (file.metadata?.size) {
            totalUsed += file.metadata.size;
          }
        }
      }
    } catch (e) {
      console.warn(`Could not get usage for bucket ${bucket}:`, e);
    }
  }

  const percentage = (totalUsed / TOTAL_LIMIT) * 100;
  const remaining = TOTAL_LIMIT - totalUsed;

  return {
    used: totalUsed,
    limit: TOTAL_LIMIT,
    percentage: Math.round(percentage * 100) / 100,
    isWarning: percentage >= STORAGE_LIMITS.STORAGE_WARNING_THRESHOLD * 100,
    isCritical: percentage >= STORAGE_LIMITS.STORAGE_CRITICAL_THRESHOLD * 100,
    remaining,
    // Rough estimate based on average monthly usage (you should track this properly)
    estimatedMonths: remaining > 0 ? Math.floor(remaining / (totalUsed / 6 || 1)) : 0,
  };
};

/**
 * Format bytes to human readable string
 */
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// ============================================
// VERIFICATION
// ============================================

/**
 * Verify Supabase connection and storage access
 */
export const verifySupabase = async (): Promise<boolean> => {
  try {
    // Try to list files in a bucket (lightweight operation)
    const { error } = await supabaseAdmin.storage
      .from(BUCKETS.PROJECTS)
      .list('', { limit: 1 });
    
    if (error) {
      // Bucket might not exist yet, try to create it
      console.log('Creating storage buckets...');
      await createBucketsIfNeeded();
    }
    
    console.log('✅ Supabase Storage connected');
    return true;
  } catch (error) {
    console.error('❌ Supabase connection failed:', error);
    return false;
  }
};

/**
 * Create storage buckets if they don't exist
 */
export const createBucketsIfNeeded = async (): Promise<void> => {
  for (const bucket of Object.values(BUCKETS)) {
    try {
      const { error } = await supabaseAdmin.storage.createBucket(bucket, {
        public: true, // Public access for serving images
        fileSizeLimit: bucket === BUCKETS.VIDEOS 
          ? STORAGE_LIMITS.MAX_VIDEO_SIZE 
          : STORAGE_LIMITS.MAX_IMAGE_SIZE,
      });
      
      if (error && !error.message.includes('already exists')) {
        console.error(`Failed to create bucket ${bucket}:`, error);
      } else {
        console.log(`✅ Bucket '${bucket}' ready`);
      }
    } catch (e) {
      console.warn(`Could not create bucket ${bucket}:`, e);
    }
  }
};

// ============================================
// CLEANUP UTILITIES (for managing 1GB limit)
// ============================================

/**
 * Get list of files ordered by size (largest first)
 * Useful for identifying what's using the most storage
 */
export const getLargestFiles = async (
  bucket: string,
  limit: number = 10
): Promise<Array<{ name: string; size: number; sizeFormatted: string }>> => {
  const { data: files, error } = await supabaseAdmin.storage
    .from(bucket)
    .list('', { limit: 1000 });

  if (error || !files) return [];

  return files
    .filter(f => f.metadata?.size)
    .sort((a, b) => (b.metadata?.size || 0) - (a.metadata?.size || 0))
    .slice(0, limit)
    .map(f => ({
      name: f.name,
      size: f.metadata?.size || 0,
      sizeFormatted: formatBytes(f.metadata?.size || 0),
    }));
};

/**
 * Get files older than a certain date
 * Useful for cleaning up old unused files
 */
export const getOldFiles = async (
  bucket: string,
  olderThanDays: number = 180 // 6 months default
): Promise<string[]> => {
  const { data: files, error } = await supabaseAdmin.storage
    .from(bucket)
    .list('', { limit: 1000 });

  if (error || !files) return [];

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);

  return files
    .filter(f => {
      const created = new Date(f.created_at);
      return created < cutoffDate;
    })
    .map(f => f.name);
};

export default supabase;
