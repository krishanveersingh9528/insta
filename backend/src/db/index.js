import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// function to connect the db 
const connectDB = async () =>{
    try {
        const mongoDbInstance = await mongoose.connect(`${process.env.MOGNO_DB_UI}/${DB_NAME}`)
        console.log(`mogoDb connection established😎 ${mongoDbInstance.connection.host}`);
        
    } catch (error) {
        console.log("mogoDb connection error😩",error);
        process.exit(1);

    }
}


export default connectDB