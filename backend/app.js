import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import messageRouter from './router/messageRouter.js';
import  {errorMiddleware}  from './middlewares/errorMiddleware.js';
import userRouter from './router/userRouter.js';
import appointmentRouter from './router/appointmentRouter.js';




const app = express();
config({path:"./config/config.env"});
app.use(cors(
    {
        origin: [
            process.env.FRONTEND_URI,
            process.env.DASHBOARD_URL,
            "hms-frontendbpbiplap.vercel.app",
            "hms-dashboardbpbiplap.vercel.app",
            "https://hospital-management-system-j8qm.onrender.com",
            "https://hospital-management-system-j8qm.onrender.com/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/login",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/login/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/register",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/register/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment/add",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment/add/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment/edit",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment/edit/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment/view",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/appointment/view/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/message",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/message/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/message/add",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/message/add/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/message/edit",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/message/edit/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/message/view",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/add",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/add/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/edit",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/edit/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/view",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/view/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/login",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/login/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/register",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/register/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/logout",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/logout/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/forgotpassword",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/forgotpassword/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/resetpassword",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/resetpassword/",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/profile",
            "https://hospital-management-system-j8qm.onrender.com/dashboard/user/profile/",
            "https://hms-dashboard-by-biplap.vercel.app/login",
            "https://hms-dashboard-by-biplap.vercel.app/login/",
            "https://hms-dashboard-by-biplap.vercel.app/register",
            "https://hms-dashboard-by-biplap.vercel.app/register/",
            "https://hms-dashboard-by-biplap.vercel.app/appointment",
            "https://hms-dashboard-by-biplap.vercel.app/appointment/",
            "https://hms-dashboard-by-biplap.vercel.app/appointment/add",
            "https://hms-dashboard-by-biplap.vercel.app/appointment/add/",
            "https://hms-dashboard-by-biplap.vercel.app/appointment/edit",
            // CLOUDINARY_URL
            "https://api.cloudinary.com/v1_1/dv3wzv7jv",
            "https://res.cloudinary.com/",
            "https://res.cloudinary.com",
            //MONGO_URI
            "mongodb://localhost:27017/hospital-management-system",
            "mongodb://localhost:27017/hospital-management-system/",

        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true        
    }
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

//Routes
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/appointment', appointmentRouter);


//database connection
 dbConnection();

 app.use(errorMiddleware);


export default app;
