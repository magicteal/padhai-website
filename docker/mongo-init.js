// MongoDB initialization script
// This runs when the MongoDB container is first created

// Switch to the application database
db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE || 'padhai');

// Create application-specific collections with validation
db.createCollection('users');
db.createCollection('testimonials');
db.createCollection('projects');
db.createCollection('purchases');
db.createCollection('demobookingleads');

// Create indexes for better query performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ role: 1 });
db.testimonials.createIndex({ isApproved: 1 });
db.testimonials.createIndex({ createdAt: -1 });
db.projects.createIndex({ isFeatured: 1 });
db.projects.createIndex({ createdAt: -1 });
db.purchases.createIndex({ userId: 1 });
db.purchases.createIndex({ createdAt: -1 });
db.demobookingleads.createIndex({ email: 1 });
db.demobookingleads.createIndex({ createdAt: -1 });

print('✅ Database initialized with collections and indexes');
