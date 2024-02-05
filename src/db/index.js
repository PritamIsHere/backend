import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        const connecionInstance = await mongoose.connect(`mongodb+srv://pritamkar98765:pritam123@pritam.qq8wggv.mongodb.net/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST": ${connecionInstance.connection.host}`);
    } catch (err) {
        console.log("MONGODB connection FAILED ", err);
        process.exit(1)
    }
}

export default connectDB