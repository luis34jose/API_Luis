import express from 'express';
import router from './router';
import db from './config/db';

export const server = express();

// Middleware
server.use(express.json());

// Database connection
async function connectDB() {
    try {
        await db.authenticate();
        await db.sync();
        console.log(' Database connected');
    } catch (error) {
        console.error(' Database connection error:', error);
        process.exit(1);
    }
}

connectDB();

// Routes
server.use('/api', router);