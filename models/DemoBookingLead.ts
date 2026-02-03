import mongoose, { Schema, Model } from "mongoose";

export type DemoBookingAgeGroup = "5-6" | "7-8" | "9-10" | "11-12" | "13-14";

export type DemoBookingHelpWith =
  | "Homework takes too much time"
  | "Lack of understanding in subjects"
  | "Too much screen time"
  | "Want to introduce AI safely"
  | "Improve confidence & interest";

export type DemoBookingLearningSupport =
  | "School only"
  | "Tuition"
  | "Online classes"
  | "Tuition + online"
  | "None right now";

export type DemoBookingBudget =
  | "Up to ₹10,000"
  | "₹10,000 – ₹15,000"
  | "₹15,000 – ₹20,000"
  | "I want details first";

export type DemoBookingPreferredLanguage = "English" | "Hindi";

export interface IDemoBookingLead {
  childName: string;
  childAgeGroup: DemoBookingAgeGroup;
  helpWith: DemoBookingHelpWith[];
  learningSupport: DemoBookingLearningSupport;
  budget: DemoBookingBudget;
  parentName?: string;
  phoneNumber?: string;
  preferredLanguage?: DemoBookingPreferredLanguage;
  otpVerified?: boolean;
  otpId?: string;
  source?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DemoBookingLeadSchema = new Schema<IDemoBookingLead>(
  {
    childName: {
      type: String,
      required: true,
      trim: true,
    },
    childAgeGroup: {
      type: String,
      required: true,
      enum: ["5-6", "7-8", "9-10", "11-12", "13-14"],
    },
    helpWith: {
      type: [String],
      required: true,
      validate: {
        validator: (arr: string[]) => Array.isArray(arr) && arr.length >= 1 && arr.length <= 2,
        message: "helpWith must contain 1 to 2 selections",
      },
    },
    learningSupport: {
      type: String,
      required: true,
      enum: ["School only", "Tuition", "Online classes", "Tuition + online", "None right now"],
    },
    budget: {
      type: String,
      required: true,
      enum: ["Up to ₹10,000", "₹10,000 – ₹15,000", "₹15,000 – ₹20,000", "I want details first"],
    },
    parentName: {
      type: String,
      required: false,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: false,
      trim: true,
    },
    preferredLanguage: {
      type: String,
      required: false,
      enum: ["English", "Hindi"],
    },
    otpVerified: {
      type: Boolean,
      default: false,
    },
    otpId: {
      type: String,
    },
    source: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const DemoBookingLead: Model<IDemoBookingLead> =
  mongoose.models.DemoBookingLead ||
  mongoose.model<IDemoBookingLead>("DemoBookingLead", DemoBookingLeadSchema);

export default DemoBookingLead;
