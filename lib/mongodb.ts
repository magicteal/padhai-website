import mongoose from 'mongoose';

const MONGODB_URI_ENV = process.env.MONGODB_URI;

if (!MONGODB_URI_ENV) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env or .env.local'
  );
}

const MONGODB_URI: string = MONGODB_URI_ENV;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: MongooseCache;
  __mongoListenersAttached?: boolean;
  __mongoLoggedCached?: boolean;
};

let cached = globalWithMongoose.mongoose;

declare global {
  // eslint-disable-next-line no-var
  var __mongoListenersAttached: boolean | undefined;
  // eslint-disable-next-line no-var
  var __mongoLoggedCached: boolean | undefined;
}

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    if (!globalWithMongoose.__mongoLoggedCached) {
      globalWithMongoose.__mongoLoggedCached = true;
      const connection = mongoose.connection;
      console.log(
        `MongoDB connection reused (readyState=${connection.readyState}, host=${connection.host || 'unknown'}, name=${connection.name || 'unknown'})`
      );
    }
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    if (!globalWithMongoose.__mongoListenersAttached) {
      globalWithMongoose.__mongoListenersAttached = true;
      mongoose.connection.on('connected', () => {
        const c = mongoose.connection;
        console.log(
          `MongoDB connected (readyState=${c.readyState}, host=${c.host || 'unknown'}, name=${c.name || 'unknown'})`
        );
      });
      mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
      });
      mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected');
      });
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      const c = mongooseInstance.connection;
      console.log(
        `✅ MongoDB initial connect success (readyState=${c.readyState}, host=${c.host || 'unknown'}, name=${c.name || 'unknown'})`
      );
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
