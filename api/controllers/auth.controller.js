import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const auth = async (req, res, next) => {
    const { username, password, email } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    try {
        await newUser.save()
        res.status(201).json({ message: "User Created Successfully" })
    } catch (error) {
        next(error);
        // next(errorHandler(300, "something went wrong"));
        // next(errorHandler(error.status, error.message));
    }

}