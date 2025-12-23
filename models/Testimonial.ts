import mongoose, { Schema, Model } from 'mongoose';

export interface ITestimonial {
  parentName: string;
  childName: string;
  childAge: number;
  location: string;
  testimonialText: string;
  rating: number;
  video?: {
    url: string;
    publicId: string;
    thumbnail?: string;
  };
  image?: {
    url: string;
    publicId: string;
  };
  featured: boolean;
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    parentName: {
      type: String,
      required: [true, 'Please provide parent name'],
      trim: true,
    },
    childName: {
      type: String,
      required: [true, 'Please provide child name'],
      trim: true,
    },
    childAge: {
      type: Number,
      required: [true, 'Please provide child age'],
      min: 5,
      max: 18,
    },
    location: {
      type: String,
      required: [true, 'Please provide location'],
      trim: true,
    },
    testimonialText: {
      type: String,
      required: [true, 'Please provide testimonial text'],
      trim: true,
      maxlength: [1000, 'Testimonial cannot exceed 1000 characters'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide rating'],
      min: 1,
      max: 5,
      default: 5,
    },
    video: {
      url: String,
      publicId: String,
      thumbnail: String,
    },
    image: {
      url: String,
      publicId: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial: Model<ITestimonial> = 
  mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
