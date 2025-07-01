import mongoose from "mongoose";
import { DB_NAME } from "../const.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("✅ MongoDB Connected !!!");
    } catch (error) {
        console.log("❌ MongoDB Connection Failed : ", error.message);
        process.exit(1); // it terminate the code
    }
}