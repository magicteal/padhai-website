import mongoose, { Schema, Model } from 'mongoose';

export interface IPurchase {
  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
  courseId: string;
  courseName: string;
  amount: number; // in smallest currency unit (paise)
  currency: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  status: 'created' | 'paid' | 'failed';
  meta?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const PurchaseSchema = new Schema<IPurchase>(
  {
    userId: String,
    name: String,
    email: String,
    phone: String,
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true, default: 'INR' },
    razorpayOrderId: String,
    razorpayPaymentId: String,
    razorpaySignature: String,
    status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },
    meta: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,
  }
);

const Purchase: Model<IPurchase> =
  mongoose.models.Purchase || mongoose.model<IPurchase>('Purchase', PurchaseSchema);

export default Purchase;
