import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// ============================================
// MEDIA STORAGE CONFIGURATION
// ============================================

export const STORAGE_BUCKETS = {
  PROJECTS: 'projects',
  TESTIMONIALS: 'testimonials',
  VIDEOS: 'videos',
} as const;

export const STORAGE_LIMITS = {
  // Max file sizes
  MAX_IMAGE_SIZE: 500 * 1024,       // 500KB max per image
  MAX_VIDEO_SIZE: 10 * 1024 * 1024, // 10MB max per video
  
  // Target dimensions
  IMAGE_MAX_WIDTH: 800,
  IMAGE_MAX_HEIGHT: 1200,
  
  // Quality settings
  IMAGE_QUALITY: 0.7, // 70% quality for JPEG/WebP
  
  // Storage warnings
  STORAGE_WARNING_THRESHOLD: 0.8,  // 80% = 800MB
  STORAGE_CRITICAL_THRESHOLD: 0.95, // 95% = 950MB
};

// Get upload directory path
function getUploadDir(): string {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  return uploadDir;
}

// Get bucket directory
function getBucketDir(bucket: string): string {
  const bucketDir = path.join(getUploadDir(), bucket);
  if (!fs.existsSync(bucketDir)) {
    fs.mkdirSync(bucketDir, { recursive: true });
  }
  return bucketDir;
}

// Get metadata file path
function getMetadataFile(): string {
  const metaDir = path.join(getUploadDir(), '.metadata');
  if (!fs.existsSync(metaDir)) {
    fs.mkdirSync(metaDir, { recursive: true });
  }
  return path.join(metaDir, 'files.json');
}

// Load metadata
function loadMetadata(): Record<string, any> {
  const metaFile = getMetadataFile();
  if (fs.existsSync(metaFile)) {
    try {
      return JSON.parse(fs.readFileSync(metaFile, 'utf-8'));
    } catch (e) {
      console.warn('Failed to parse metadata file:', e);
      return {};
    }
  }
  return {};
}

// Save metadata
function saveMetadata(metadata: Record<string, any>): void {
  const metaFile = getMetadataFile();
  fs.writeFileSync(metaFile, JSON.stringify(metadata, null, 2));
}

// ============================================
// IMAGE COMPRESSION
// ============================================

/**
 * Compress image buffer using sharp
 * Falls back to basic compression if sharp is unavailable
 */
async function compressImage(buffer: Buffer): Promise<Buffer> {
  try {
    // Try to import sharp dynamically
    const sharp = require('sharp');
    try {
      const compressed = await sharp(buffer)
        .resize(STORAGE_LIMITS.IMAGE_MAX_WIDTH, STORAGE_LIMITS.IMAGE_MAX_HEIGHT, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: Math.floor(STORAGE_LIMITS.IMAGE_QUALITY * 100) })
        .toBuffer();
      
      return compressed;
    } catch (error) {
      console.warn('Sharp compression failed:', error);
      return buffer;
    }
  } catch (e) {
    // Sharp not installed, return original buffer
    console.warn('Sharp not available. Install it for better image compression.');
    return buffer;
  }
}

// ============================================
// UPLOAD FUNCTIONS
// ============================================

interface UploadResult {
  url: string;
  path: string;
  size: number;
  bucket: string;
}

/**
 * Upload an image with compression
 */
export async function uploadImage(
  buffer: Buffer,
  bucket: string,
  filename?: string
): Promise<UploadResult> {
  // Validate bucket
  if (!Object.values(STORAGE_BUCKETS).includes(bucket as any)) {
    throw new Error(`Invalid bucket: ${bucket}`);
  }

  // Check file size
  if (buffer.length > STORAGE_LIMITS.MAX_IMAGE_SIZE) {
    throw new Error(
      `Image too large: ${formatBytes(buffer.length)} > ${formatBytes(STORAGE_LIMITS.MAX_IMAGE_SIZE)}`
    );
  }

  // Compress image
  const compressedBuffer = await compressImage(buffer);

  // Generate unique filename
  const timestamp = Date.now();
  const randomId = crypto.randomBytes(4).toString('hex');
  const ext = 'webp';
  const finalFilename =
    filename
      ? `${filename.replace(/\.[^/.]+$/, '')}_${randomId}.${ext}`
      : `img_${timestamp}_${randomId}.${ext}`;

  // Save file
  const bucketDir = getBucketDir(bucket);
  const filePath = path.join(bucketDir, finalFilename);
  fs.writeFileSync(filePath, compressedBuffer);

  // Update metadata
  const metadata = loadMetadata();
  const relativePath = `${bucket}/${finalFilename}`;
  metadata[relativePath] = {
    originalSize: buffer.length,
    compressedSize: compressedBuffer.length,
    bucket,
    filename: finalFilename,
    createdAt: new Date().toISOString(),
    type: 'image',
  };
  saveMetadata(metadata);

  const url = `/uploads/${relativePath}`;

  return {
    url,
    path: relativePath,
    size: compressedBuffer.length,
    bucket,
  };
}

/**
 * Upload a video (with optional basic compression)
 */
export async function uploadVideo(
  buffer: Buffer,
  bucket: string,
  filename?: string,
  contentType: string = 'video/mp4'
): Promise<UploadResult> {
  // Validate bucket
  if (!Object.values(STORAGE_BUCKETS).includes(bucket as any)) {
    throw new Error(`Invalid bucket: ${bucket}`);
  }

  // Check file size
  if (buffer.length > STORAGE_LIMITS.MAX_VIDEO_SIZE) {
    throw new Error(
      `Video too large: ${formatBytes(buffer.length)} > ${formatBytes(STORAGE_LIMITS.MAX_VIDEO_SIZE)}`
    );
  }

  // Generate unique filename
  const timestamp = Date.now();
  const randomId = crypto.randomBytes(4).toString('hex');
  const ext = contentType.includes('webm') ? 'webm' : 'mp4';
  const finalFilename =
    filename
      ? `${filename.replace(/\.[^/.]+$/, '')}_${randomId}.${ext}`
      : `vid_${timestamp}_${randomId}.${ext}`;

  // Save file
  const bucketDir = getBucketDir(bucket);
  const filePath = path.join(bucketDir, finalFilename);
  fs.writeFileSync(filePath, buffer);

  // Update metadata
  const metadata = loadMetadata();
  const relativePath = `${bucket}/${finalFilename}`;
  metadata[relativePath] = {
    size: buffer.length,
    bucket,
    filename: finalFilename,
    createdAt: new Date().toISOString(),
    type: 'video',
    contentType,
  };
  saveMetadata(metadata);

  const url = `/uploads/${relativePath}`;

  return {
    url,
    path: relativePath,
    size: buffer.length,
    bucket,
  };
}

// ============================================
// DELETE FUNCTIONS
// ============================================

/**
 * Delete a file
 */
export async function deleteFile(bucket: string, filePath: string): Promise<void> {
  if (!filePath) return;

  const fullPath = path.join(getUploadDir(), filePath);

  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }

  // Update metadata
  const metadata = loadMetadata();
  delete metadata[filePath];
  saveMetadata(metadata);
}

/**
 * Delete multiple files
 */
export async function deleteFiles(bucket: string, filePaths: string[]): Promise<void> {
  if (!filePaths.length) return;

  const metadata = loadMetadata();

  for (const filePath of filePaths) {
    const fullPath = path.join(getUploadDir(), filePath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
    delete metadata[filePath];
  }

  saveMetadata(metadata);
}

// ============================================
// STORAGE MONITORING
// ============================================

interface StorageUsage {
  used: number;
  limit: number;
  percentage: number;
  isWarning: boolean;
  isCritical: boolean;
  remaining: number;
  estimatedMonths: number;
}

/**
 * Get current storage usage
 */
export async function getStorageUsage(): Promise<StorageUsage> {
  const TOTAL_LIMIT = 1024 * 1024 * 1024; // 1GB

  let totalUsed = 0;

  const uploadDir = getUploadDir();
  if (fs.existsSync(uploadDir)) {
    // Recursively sum all file sizes
    function sumDirSize(dir: string): number {
      let size = 0;
      const files = fs.readdirSync(dir);

      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          size += sumDirSize(filePath);
        } else {
          size += stat.size;
        }
      }

      return size;
    }

    totalUsed = sumDirSize(uploadDir);
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
    estimatedMonths: remaining > 0 ? Math.floor(remaining / (totalUsed / 6 || 1)) : 0,
  };
}

/**
 * Format bytes to human readable string
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// ============================================
// FILE LISTING & CLEANUP
// ============================================

interface FileInfo {
  name: string;
  size: number;
  sizeFormatted: string;
  createdAt?: string;
}

/**
 * Get files ordered by size (largest first)
 */
export async function getLargestFiles(
  bucket: string,
  limit: number = 10
): Promise<FileInfo[]> {
  const bucketDir = getBucketDir(bucket);
  const metadata = loadMetadata();

  const files: FileInfo[] = [];

  if (fs.existsSync(bucketDir)) {
    const fileNames = fs.readdirSync(bucketDir);

    for (const name of fileNames) {
      const filePath = path.join(bucketDir, name);
      const stat = fs.statSync(filePath);
      const relativePath = `${bucket}/${name}`;
      const meta = metadata[relativePath];

      files.push({
        name,
        size: stat.size,
        sizeFormatted: formatBytes(stat.size),
        createdAt: meta?.createdAt,
      });
    }
  }

  return files
    .sort((a, b) => b.size - a.size)
    .slice(0, limit);
}

/**
 * Get files older than a certain date
 */
export async function getOldFiles(
  bucket: string,
  olderThanDays: number = 180
): Promise<string[]> {
  const metadata = loadMetadata();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);

  const oldFiles: string[] = [];

  for (const [filePath, meta] of Object.entries(metadata)) {
    if (meta.bucket === bucket && meta.createdAt) {
      const createdAt = new Date(meta.createdAt);
      if (createdAt < cutoffDate) {
        oldFiles.push(filePath);
      }
    }
  }

  return oldFiles;
}

// ============================================
// VERIFICATION
// ============================================

/**
 * Verify media storage is ready
 */
export function verifyMediaStorage(): boolean {
  try {
    const uploadDir = getUploadDir();
    console.log('✅ Media Storage initialized at:', uploadDir);
    return true;
  } catch (error) {
    console.error('❌ Media Storage initialization failed:', error);
    return false;
  }
}

/**
 * Initialize storage directories
 */
export function initializeStorage(): void {
  for (const bucket of Object.values(STORAGE_BUCKETS)) {
    getBucketDir(bucket);
    console.log(`✅ Bucket '${bucket}' ready`);
  }
}

export const BUCKETS = STORAGE_BUCKETS; // Alias for compatibility
