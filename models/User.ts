import mongoose, { Schema, Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'user' | 'admin';
  avatar?: {
    url: string;
    publicId: string;
  };
  childName?: string;
  childAge?: number;
  enrolledCourses?: Array<{
    courseId: string;
    courseName: string;
    purchaseId?: string;
    purchasedAt?: Date;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    phone: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    avatar: {
      url: String,
      publicId: String,
    },
    childName: {
      type: String,
      trim: true,
    },
    childAge: {
      type: Number,
      min: 5,
      max: 18,
    },
    enrolledCourses: [
      {
        courseId: String,
        courseName: String,
        purchaseId: String,
        purchasedAt: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation in development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
