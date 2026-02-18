# 🎯 Quick Reference - Database & Media

## 📋 Environment Variables Needed

```env
MONGODB_URI=                        # From MongoDB Atlas
JWT_SECRET=                         # Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Optional (local dev): bootstrap a dev admin on first login
# ENABLE_DEV_ADMIN=true
# DEV_ADMIN_EMAIL=admin@padhai.com
# DEV_ADMIN_PASSWORD=admin123
```

## 🔗 Quick Links

- **Setup Guide:** [CREDENTIALS_SETUP.md](CREDENTIALS_SETUP.md)
- **Full Documentation:** [DATABASE_SETUP.md](DATABASE_SETUP.md)
- **Test Connection:** http://localhost:3000/api/test-connection
- **Storage Usage:** http://localhost:3000/api/storage/usage

## 📦 Available Models

```typescript
import User from '@/models/User';
import Testimonial from '@/models/Testimonial';
import Project from '@/models/Project';
```

## 🛠️ Common Functions

```typescript
// Database
import connectDB from '@/lib/mongodb';
import { getFeaturedProjects, getApprovedTestimonials } from '@/lib/db-utils';

// Media Upload (Local Compressed Storage)
import { uploadImage, uploadVideo, deleteFile, STORAGE_BUCKETS } from '@/lib/media-storage';

// Storage Monitoring (1GB local limit)
import { getStorageUsage, formatBytes } from '@/lib/media-storage';
```

## 📊 Storage Optimization Tips

- **Auto-compression:** All images are automatically compressed to WebP format
- **Max image size:** 500KB (enforced at upload)
- **Max video size:** 10MB (enforced at upload)
- **Storage location:** `/public/uploads` (auto-created at startup)
- **Metadata tracking:** Automatic file tracking in `/public/uploads/.metadata/files.json`
- **Monitor usage:** Check `/api/storage/usage` to view storage stats

## ⚡ Quick Start

1. Copy credentials to `.env` (only MONGODB_URI and JWT_SECRET needed now)
2. Run: `npm run dev`
3. Test: http://localhost:3000/api/test-connection
4. Check storage: http://localhost:3000/api/storage/usage
5. Build your API routes!

---
**See [SETUP_COMPLETE.md](SETUP_COMPLETE.md) for full details**
