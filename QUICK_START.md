# 🎯 Quick Reference - Database & Media

## 📋 Environment Variables Needed

```env
MONGODB_URI=                        # From MongoDB Atlas
NEXT_PUBLIC_SUPABASE_URL=           # From Supabase Dashboard → Settings → API
NEXT_PUBLIC_SUPABASE_ANON_KEY=      # From Supabase Dashboard → Settings → API
SUPABASE_SERVICE_ROLE_KEY=          # From Supabase Dashboard → Settings → API (keep secret!)
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

// Media Upload (Supabase Storage)
import { uploadImage, uploadVideo, deleteFile, BUCKETS } from '@/lib/supabase';

// Storage Monitoring (Important for 1GB free plan!)
import { getStorageUsage, formatBytes } from '@/lib/supabase';
```

## 📊 Storage Optimization Tips (1GB Free Plan)

- **Max image size:** 500KB (pre-compress before upload)
- **Max video size:** 10MB (compress videos before upload)
- **Monitor usage:** Check `/api/storage/usage` regularly
- **Clean up:** Delete unused files to free space

## ⚡ Quick Start

1. Copy credentials to `.env`
2. Run: `npm run dev`
3. Test: http://localhost:3000/api/test-connection
4. Check storage: http://localhost:3000/api/storage/usage
5. Build your API routes!

---
**See [SETUP_COMPLETE.md](SETUP_COMPLETE.md) for full details**
