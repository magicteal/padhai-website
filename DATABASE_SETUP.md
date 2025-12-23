# PadhAi Website - Database & Media Setup Guide

## 🚀 Quick Setup

### 1. MongoDB Setup

#### Option A: MongoDB Atlas (Recommended for Production)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password
6. Paste in `.env` file as `MONGODB_URI`

Example:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/padhai?retryWrites=true&w=majority
```

#### Option B: Local MongoDB
1. Install MongoDB locally
2. Use connection string:
```
MONGODB_URI=mongodb://localhost:27017/padhai
```

### 2. Cloudinary Setup

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account
3. Go to Dashboard
4. Copy the following credentials:
   - Cloud Name
   - API Key
   - API Secret
5. Paste in `.env` file

### 3. JWT Secret

Generate a random secret key for authentication:
```bash
# Run in terminal
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Paste the output in `.env` as `JWT_SECRET`

## 📝 Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Then edit `.env` with your actual credentials:

```env
# MongoDB Configuration
MONGODB_URI=your_actual_mongodb_uri

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT Secret
JWT_SECRET=your_generated_secret

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📦 Database Models

### User Model
- Stores user authentication and profile data
- Fields: name, email, password, phone, role, avatar, child info

### Testimonial Model
- Stores parent testimonials
- Fields: names, ages, location, text, rating, video/image URLs
- Supports featured and approval status

### Project Model
- Stores student projects
- Fields: title, description, category, student info, media URLs
- Includes likes, views, and featured status

## 🎨 Cloudinary Usage

### Upload Image
```typescript
import { uploadImage } from '@/lib/cloudinary';

const result = await uploadImage(filePathOrBase64, 'padhai/images');
// Returns: { url, publicId, format }
```

### Upload Video
```typescript
import { uploadVideo } from '@/lib/cloudinary';

const result = await uploadVideo(filePathOrBase64, 'padhai/videos');
// Returns: { url, publicId, format, duration }
```

### Delete File
```typescript
import { deleteFile } from '@/lib/cloudinary';

await deleteFile(publicId, 'image'); // or 'video'
```

## 🗄️ MongoDB Connection

The connection is automatically handled with caching:

```typescript
import connectDB from '@/lib/mongodb';

// In API routes or server components
await connectDB();

// Now you can use models
import User from '@/models/User';
const users = await User.find();
```

## 🔒 Security Notes

- ✅ `.env` is already in `.gitignore`
- ✅ Never commit credentials to git
- ✅ Use different credentials for development and production
- ✅ Rotate JWT_SECRET regularly in production

## 📁 File Structure

```
lib/
  ├── mongodb.ts          # MongoDB connection utility
  ├── cloudinary.ts       # Cloudinary upload/delete functions
  └── types.ts            # Shared TypeScript types

models/
  ├── User.ts             # User schema
  ├── Testimonial.ts      # Testimonial schema
  └── Project.ts          # Project schema

types/
  └── mongoose.d.ts       # TypeScript declarations
```

## 🧪 Testing Connection

Create a test API route to verify setup:

```typescript
// app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: 'Database connected!' });
  } catch (error) {
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}
```

Visit: `http://localhost:3000/api/test-db`

## 🎯 Next Steps

1. Fill in your `.env` credentials
2. Test database connection
3. Create API routes for CRUD operations
4. Implement authentication middleware
5. Add file upload endpoints

---

**Need Help?** Check the MongoDB and Cloudinary documentation or create an issue.
