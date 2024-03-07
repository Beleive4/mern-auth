import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/user.route.js';


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch((err) => {
        console.log(err, "ERROR");
    })



const app = express();

app.use("/api", router)


app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT}`);
})
