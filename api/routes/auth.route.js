import express from 'express';
import { auth, signIn } from '../controllers/auth.controller.js';



const authRouter = express.Router();

authRouter.post("/signup", auth)
authRouter.post("/signin", signIn)


export default authRouter;