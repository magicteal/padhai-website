import mongoose from 'mongoose';
import dns from 'dns';

function normalizeDnsServers(raw: string | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

const globalWithDns = global as typeof globalThis & {
  __nodeDnsConfigured?: boolean;
};

let dnsConfigured = globalWithDns.__nodeDnsConfigured ?? false;
function ensureNodeDnsConfigured() {
  if (dnsConfigured) return;

  const overrideServers = normalizeDnsServers(process.env.DNS_SERVERS);
  if (overrideServers.length > 0) {
    dns.setServers(overrideServers);
    dnsConfigured = true;
    globalWithDns.__nodeDnsConfigured = true;
    console.log(`✅ Node DNS servers overridden: ${dns.getServers().join(', ')}`);
    return;
  }

  const current = dns.getServers();
  const looksLikeLocalResolver =
    current.length === 1 && (current[0] === '127.0.0.1' || current[0] === '::1');

  if (looksLikeLocalResolver) {
    console.warn(
      `⚠️ Node DNS is set to ${current[0]} which often breaks MongoDB Atlas SRV lookups (querySrv ECONNREFUSED). ` +
        `Set DNS_SERVERS (comma-separated) to your real DNS server (e.g. from Windows: Get-DnsClientServerAddress).`
    );
  }

  dnsConfigured = true;
  globalWithDns.__nodeDnsConfigured = true;
}

function isMongoSrvDnsError(err: unknown): boolean {
  const anyErr = err as any;
  const code = anyErr?.code;
  const syscall = anyErr?.syscall;
  return code === 'ECONNREFUSED' && syscall === 'querySrv';
}

function describeMongoError(err: unknown): string {
  if (err instanceof Error && err.message) return err.message;
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  uri?: string;
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
  const MONGODB_URI = process.env.MONGODB_URI;
  const MONGODB_URI_FALLBACK = process.env.MONGODB_URI_FALLBACK;

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env or .env.local'
    );
  }

  ensureNodeDnsConfigured();

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
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
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

    const primaryUri = cached.uri || MONGODB_URI;
    cached.uri = primaryUri;

    let didRetrySrv = false;

    cached.promise = mongoose
      .connect(primaryUri, opts)
      .catch(async (err) => {
        if (isMongoSrvDnsError(err) && !didRetrySrv) {
          didRetrySrv = true;
          await new Promise((r) => setTimeout(r, 600));
          return mongoose.connect(primaryUri, opts);
        }

        if (
          isMongoSrvDnsError(err) &&
          MONGODB_URI_FALLBACK &&
          typeof MONGODB_URI_FALLBACK === 'string' &&
          MONGODB_URI_FALLBACK.trim() &&
          MONGODB_URI_FALLBACK !== primaryUri
        ) {
          console.warn(
            '⚠️ MongoDB Atlas SRV lookup failed; retrying with MONGODB_URI_FALLBACK (non-SRV connection string recommended).'
          );
          cached.uri = MONGODB_URI_FALLBACK;
          return mongoose.connect(MONGODB_URI_FALLBACK, opts);
        }

        const msg = describeMongoError(err);
        if (isMongoSrvDnsError(err)) {
          const dnsServers = dns.getServers().join(', ') || 'unknown';
          throw new Error(
            `${msg}\n\n` +
              `This is usually a DNS/SRV lookup problem (Node DNS servers: ${dnsServers}). ` +
              `Fix options:\n` +
              `- Set DNS_SERVERS to a working DNS server (comma-separated), then restart dev server\n` +
              `- Use a non-SRV MongoDB URI (mongodb://host1,host2,host3/...) as MONGODB_URI_FALLBACK\n`
          );
        }
        throw err;
      })
      .then((mongooseInstance) => {
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
