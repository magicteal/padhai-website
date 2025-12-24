import { v2 as cloudinary } from 'cloudinary';

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Track if we've already logged Cloudinary status
let cloudinaryLogged = false;

/**
 * Verify Cloudinary connection and log status
 */
export async function verifyCloudinary() {
  if (cloudinaryLogged) return true;
  
  try {
    // Ping Cloudinary by fetching account info
    const result = await cloudinary.api.ping();
    if (result.status === 'ok') {
      console.log(`✅ Cloudinary connected (cloud_name=${process.env.CLOUDINARY_CLOUD_NAME})`);
      cloudinaryLogged = true;
      return true;
    }
    return false;
  } catch (error: any) {
    console.error('❌ Cloudinary connection error:', error.message);
    return false;
  }
}

/**
 * Upload image to Cloudinary
 * @param file - File path or base64 string
 * @param folder - Folder name in Cloudinary
 * @returns Upload result with URL
 */
export const uploadImage = async (file: string, folder: string = 'padhai') => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: folder,
      resource_type: 'auto',
      transformation: [
        { quality: 'auto:good' },
        { fetch_format: 'auto' }
      ]
    });
    
    return {
      url: result.secure_url,
      publicId: result.public_id,
      format: result.format,
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload image');
  }
};

/**
 * Upload video to Cloudinary
 * @param file - File path or base64 string
 * @param folder - Folder name in Cloudinary
 * @returns Upload result with URL
 */
export const uploadVideo = async (file: string, folder: string = 'padhai/videos') => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: folder,
      resource_type: 'video',
      transformation: [
        { quality: 'auto:good' },
        { fetch_format: 'auto' }
      ]
    });
    
    return {
      url: result.secure_url,
      publicId: result.public_id,
      format: result.format,
      duration: result.duration,
    };
  } catch (error) {
    console.error('Cloudinary video upload error:', error);
    throw new Error('Failed to upload video');
  }
};

/**
 * Delete file from Cloudinary
 * @param publicId - Public ID of the file
 * @param resourceType - Type of resource ('image' or 'video')
 */
export const deleteFile = async (publicId: string, resourceType: 'image' | 'video' = 'image') => {
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
    return { success: true };
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    throw new Error('Failed to delete file');
  }
};

export default cloudinary;
