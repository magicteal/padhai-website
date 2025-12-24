/**
 * Initialize database and external service connections
 * Import this in layout or API routes to trigger connection on startup
 */
import connectDB from './mongodb';
import { verifyCloudinary } from './cloudinary';

let initialized = false;

export async function initializeServices() {
  if (initialized) return;

  console.log('\n🚀 Initializing services...\n');

  try {
    // Connect to MongoDB
    await connectDB();
  } catch (error) {
    console.error('❌ MongoDB initialization failed:', error instanceof Error ? error.message : error);
  }

  try {
    // Verify Cloudinary
    await verifyCloudinary();
  } catch (error) {
    console.error('❌ Cloudinary initialization failed:', error instanceof Error ? error.message : error);
  }

  initialized = true;
  console.log('\n✨ Services initialized!\n');
}

export default initializeServices;
