import mongoose, { Schema, Model } from 'mongoose';

export interface IProject {
  title: string;
  description: string;
  category: 'AI Tool' | 'Creative' | 'Problem Solving' | 'Games' | 'Other';
  studentName: string;
  studentAge: number;
  batchMonth: string;
  thumbnail: {
    url: string;
    publicId: string;
  };
  images?: Array<{
    url: string;
    publicId: string;
  }>;
  video?: {
    url: string;
    publicId: string;
  };
  technologies?: string[];
  featured: boolean;
  approved: boolean;
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Please provide project title'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide project description'],
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['AI Tool', 'Creative', 'Problem Solving', 'Games', 'Other'],
    },
    studentName: {
      type: String,
      required: [true, 'Please provide student name'],
      trim: true,
    },
    studentAge: {
      type: Number,
      required: [true, 'Please provide student age'],
      min: 5,
      max: 18,
    },
    batchMonth: {
      type: String,
      required: [true, 'Please provide batch month'],
      trim: true,
    },
    thumbnail: {
      url: {
        type: String,
        required: true,
      },
      publicId: {
        type: String,
        required: true,
      },
    },
    images: [
      {
        url: String,
        publicId: String,
      },
    ],
    video: {
      url: String,
      publicId: String,
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
ProjectSchema.index({ category: 1, featured: 1 });
ProjectSchema.index({ approved: 1, createdAt: -1 });

const Project: Model<IProject> = 
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
