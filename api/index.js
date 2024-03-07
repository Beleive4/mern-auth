import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch((err) => {
        console.log(err, "ERROR");
    })



const app = express();

app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT}`);
})


app.use("/api/user", router)
app.use("/api/auth", authRouter)


//error handling throught the application
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode: statusCode,
    })
})