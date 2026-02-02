import mongoose from 'mongoose';
import { seedDatabase, clearDatabase } from './Database.js';

// MongoDB connection configuration
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommercedb';

async function connectToDatabase() {
    try {
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB');
        return true;
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        return false;
    }
}

async function runSeeder() {
    const connected = await connectToDatabase();
    
    if (!connected) {
        console.log('Please ensure MongoDB is running and accessible.');
        process.exit(1);
    }

    try {
        const action = process.argv[2];
        
        if (action === 'clear') {
            console.log('🧹 Clearing database...');
            await clearDatabase();
        } else {
            console.log('🌱 Seeding database...');
            await seedDatabase();
        }
        
        console.log('✅ Seeder completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeder failed:', error);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        console.log('🔌 Database connection closed');
    }
}

// Run the seeder
runSeeder();