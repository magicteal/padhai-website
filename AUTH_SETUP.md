# 🔐 Authentication Setup - Simplified

## How It Works

All users sign up and login with their email and password. There's no special admin username.

To make someone an admin, you'll update their role directly in MongoDB.

---

## 1️⃣ User Signup

Users can register at `/signup` or via API:

**POST** `/api/auth/signup`
```json
{
  "name": "Parent Name",
  "email": "user@example.com",
  "password": "password123",
  "phone": "9876543210",
  "childName": "Child Name",
  "childAge": 10
}
```

By default, all users get `role: "user"`

---

## 2️⃣ Making a User Admin

### Option A: MongoDB Atlas Dashboard
1. Go to your MongoDB Atlas cluster
2. Click "Browse Collections"
3. Find the `users` collection
4. Find the user you want to make admin
5. Click "Edit" on their document
6. Change `role` from `"user"` to `"admin"`
7. Click "Update"

### Option B: MongoDB Compass
1. Open MongoDB Compass
2. Connect to your database
3. Navigate to `users` collection
4. Find the user
5. Edit the document
6. Change `role: "user"` to `role: "admin"`
7. Save

### Option C: Using mongosh (CLI)
```javascript
// Connect to your database
mongosh "your_mongodb_connection_string"

// Update user role
db.users.updateOne(
  { email: "user@example.com" },
  { $set: { role: "admin" } }
)
```

---

## 3️⃣ Login

Both regular users and admins login the same way:

**POST** `/api/auth/login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

The response will include the user's role:
```json
{
  "success": true,
  "user": {
    "id": "...",
    "email": "user@example.com",
    "role": "admin",  // or "user"
    ...
  },
  "token": "jwt_token_here"
}
```

---

## 4️⃣ Protected Routes

Use the middleware helpers to protect routes:

### Require Any Logged In User
```typescript
import { requireAuth } from '@/lib/middleware';

export async function GET(request: NextRequest) {
  const user = await requireAuth(request);
  if (user instanceof NextResponse) return user;
  
  // User is authenticated
  return NextResponse.json({ user });
}
```

### Require Admin Only
```typescript
import { requireAdmin } from '@/lib/middleware';

export async function GET(request: NextRequest) {
  const admin = await requireAdmin(request);
  if (admin instanceof NextResponse) return admin;
  
  // User is admin
  return NextResponse.json({ admin });
}
```

---

## 5️⃣ Quick Start Guide

1. **Create a user account** via signup
2. **Login** to get authenticated
3. **Make yourself admin** by updating the role in MongoDB
4. **Re-login** to get new JWT with admin role
5. **Access admin routes** with admin privileges

---

## API Endpoints

- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user info

---

**Simple and straightforward!** 🚀
