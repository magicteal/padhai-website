# 🔐 Environment Setup - Credentials Guide

## Quick Start Checklist

- [ ] MongoDB URI added to `.env`
- [ ] Cloudinary credentials added to `.env`
- [ ] JWT Secret generated and added to `.env`
- [ ] Test connection successful

---

## 📋 Step-by-Step Setup

### 1️⃣ MongoDB Setup (5 minutes)

**Get Your MongoDB URI:**

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for free account
3. Create a **FREE** cluster (M0 Sandbox)
4. Click **"Database"** in left sidebar
5. Click **"Connect"** button
6. Choose **"Connect your application"**
7. Copy the connection string (looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
   ```
8. Replace `<password>` with your actual password
9. Add database name at the end: `/padhai`

**Your final URI should look like:**
```
mongodb+srv://myusername:myP@ssw0rd@cluster0.abc123.mongodb.net/padhai?retryWrites=true&w=majority
```

**Paste it in `.env`:**
```env
MONGODB_URI=mongodb+srv://myusername:myP@ssw0rd@cluster0.abc123.mongodb.net/padhai?retryWrites=true&w=majority
```

---

### 2️⃣ Cloudinary Setup (3 minutes)

**Get Your Cloudinary Credentials:**

1. Visit [Cloudinary Signup](https://cloudinary.com/users/register/free)
2. Create a **FREE** account
3. Go to **Dashboard** (automatically opens after signup)
4. You'll see three credentials on the dashboard:

   ```
   Cloud Name: your_cloud_name
   API Key: 123456789012345
   API Secret: AbCdEfGhIjKlMnOpQrStUvWxYz
   ```

**Paste them in `.env`:**
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=AbCdEfGhIjKlMnOpQrStUvWxYz
```

---

### 3️⃣ JWT Secret Generation (30 seconds)

**Generate a random secret:**

**Option A - Using Node.js (recommended):**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Option B - Online Generator:**
Visit: https://generate-secret.vercel.app/32

**Copy the output and paste in `.env`:**
```env
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
```

---

## 📝 Your Complete `.env` File

After following all steps, your `.env` should look like this:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/padhai?retryWrites=true&w=majority

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=AbCdEfGhIjKlMnOpQrStUvWxYz

# JWT Secret (for authentication)
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## ✅ Test Your Setup

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the test endpoint:**
   ```
   http://localhost:3000/api/test-connection
   ```

3. **You should see:**
   ```json
   {
     "success": true,
     "message": "✅ Database connected successfully!",
     "database": {
       "connected": true,
       "collections": {
         "users": 0,
         "testimonials": 0,
         "projects": 0
       }
     }
   }
   ```

---

## ❌ Troubleshooting

### MongoDB Connection Failed

**Error:** `MongoServerError: Authentication failed`
- ✅ Check your password is correct (no special characters unencoded)
- ✅ Check username is correct
- ✅ Make sure you added `/padhai` at the end

**Error:** `MongooseServerSelectionError`
- ✅ Check your internet connection
- ✅ Make sure MongoDB cluster is running (Atlas should be always on)
- ✅ Whitelist your IP address in MongoDB Atlas → Network Access

### Cloudinary Upload Failed

**Error:** `Invalid signature`
- ✅ Check API_KEY and API_SECRET are copied correctly
- ✅ No extra spaces before or after credentials

**Error:** `Cloud name not found`
- ✅ Check CLOUD_NAME is correct
- ✅ Cloud name is usually all lowercase

### JWT Error

**Error:** `secretOrPrivateKey must have a value`
- ✅ Make sure JWT_SECRET is not empty
- ✅ Generate a new secret using the command above

---

## 🔒 Security Reminders

- ✅ **NEVER** commit `.env` file to Git
- ✅ **NEVER** share your credentials publicly
- ✅ `.env` is already in `.gitignore`
- ✅ Use different credentials for production and development
- ✅ Rotate your JWT_SECRET regularly in production

---

## 📞 Need Help?

1. Check [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed documentation
2. MongoDB issues: [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
3. Cloudinary issues: [Cloudinary Docs](https://cloudinary.com/documentation)

---

**All set?** Once your `.env` is configured, you're ready to start building! 🚀
