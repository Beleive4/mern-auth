import mongoose from "mongoose";

const Schema = mongoose.Schema;


const homeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export const Home = mongoose.model("home", homeSchema);
