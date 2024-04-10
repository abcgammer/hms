import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import messageRouter from './router/messageRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import userRouter from './router/userRouter.js';
import appointmentRouter from './router/appointmentRouter.js';

const app = express();
config({ path: "./config/config.env" });

// Load origins from environment variables or use specific origins directly
const allowedOrigins = [
    process.env.FRONTEND_URI,
    process.env.DASHBOARD_URL,
    "https://hms-frontendbpbiplap.vercel.app",
    "https://hms-dashboardbpbiplap.vercel.app",
    "https://hospital-management-system-j8qm.onrender.com",
    "https://api.cloudinary.com",
    "https://res.cloudinary.com",
    "http://localhost:3000" // Assuming your frontend runs on localhost:3000
];

// CORS configuration
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Enable credentials (cookies, authorization headers)
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Routes
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/appointment', appointmentRouter);

// Database connection
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
