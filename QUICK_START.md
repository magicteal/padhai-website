# 🎯 Quick Reference - Database & Media

## 📋 Environment Variables Needed

```env
MONGODB_URI=                    # From MongoDB Atlas
CLOUDINARY_CLOUD_NAME=          # From Cloudinary Dashboard
CLOUDINARY_API_KEY=             # From Cloudinary Dashboard
CLOUDINARY_API_SECRET=          # From Cloudinary Dashboard
JWT_SECRET=                     # Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 🔗 Quick Links

- **Setup Guide:** [CREDENTIALS_SETUP.md](CREDENTIALS_SETUP.md)
- **Full Documentation:** [DATABASE_SETUP.md](DATABASE_SETUP.md)
- **Test Connection:** http://localhost:3000/api/test-connection

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

// Media Upload
import { uploadImage, uploadVideo, deleteFile } from '@/lib/cloudinary';
```

## ⚡ Quick Start

1. Copy credentials to `.env`
2. Run: `npm run dev`
3. Test: http://localhost:3000/api/test-connection
4. Build your API routes!

---
**See [SETUP_COMPLETE.md](SETUP_COMPLETE.md) for full details**
