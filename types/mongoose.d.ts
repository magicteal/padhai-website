// Global type augmentation for mongoose caching
import mongooseType from 'mongoose';

declare global {
  var mongoose: {
    conn: typeof mongooseType | null;
    promise: Promise<typeof mongooseType> | null;
  };
}

export {};
