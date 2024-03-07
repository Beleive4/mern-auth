import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Kiran.")
})


app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT}`);
})
