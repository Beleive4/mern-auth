import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch((err) => {
        console.log(err, "ERROR");
    })



const app = express();

app.get("/", (req, res) => {
    res.send("Hello Kiran.")
})


app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT}`);
})
