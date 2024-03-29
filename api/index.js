import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch((err) => {
        console.log(err, "ERROR");
    })

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT}`);
})

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

app.use("/api/user", router)
app.use("/api/user", authRouter)


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