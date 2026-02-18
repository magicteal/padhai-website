/**
 * Initialize database and external service connections
 * Import this in layout or API routes to trigger connection on startup
 */
import connectDB from './mongodb';
import { verifyMediaStorage, initializeStorage, getStorageUsage, formatBytes } from './media-storage';

let initialized = false;

export async function initializeServices() {
  if (initialized) return;

  console.log('\n🚀 Initializing services...\n');

  let mongoOk = false;
  let mediaStorageOk = false;

  try {
    await connectDB();
    mongoOk = true;
  } catch (error) {
    console.error('❌ MongoDB initialization failed:', error instanceof Error ? error.message : error);
  }

  try {
    initializeStorage();
    mediaStorageOk = verifyMediaStorage();
    
    // Log storage usage for monitoring
    if (mediaStorageOk) {
      const usage = await getStorageUsage();
      console.log(`📦 Storage: ${formatBytes(usage.used)} / ${formatBytes(usage.limit)} (${usage.percentage}%)`);
      if (usage.isWarning) {
        console.warn('⚠️ Storage usage is high! Consider cleaning up old files.');
      }
      if (usage.isCritical) {
        console.error('🚨 Storage is almost full! Clean up immediately!');
      }
    }
  } catch (error) {
    console.error('❌ Media Storage initialization failed:', error instanceof Error ? error.message : error);
  }

  initialized = true;

  if (mongoOk && mediaStorageOk) {
    console.log('\n✨ Services initialized!\n');
  } else {
    console.log(
      `\n⚠️ Services initialized with issues (mongo=${mongoOk ? 'ok' : 'failed'}, media-storage=${mediaStorageOk ? 'ok' : 'failed'})\n`
    );
  }
}

export default initializeServices;
