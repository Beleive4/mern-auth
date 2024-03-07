import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const auth = async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, password:hashedPassword, email });
    try {
        await newUser.save()
        res.status(201).json({ message: "User Created Successfully" })
    } catch (error) {
        res.status(404).json(error.message);
    }

}