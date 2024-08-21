import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();
const mongodbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('database connection successfully !');
    } catch (error) {
        console.log("🚀 ~ file: mongodbConnection.js:7 ~ error:", error);

    }
}

export default mongodbConnection
