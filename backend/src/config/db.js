
import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)

    } catch (error){
        console.error("Error conecting to MongoDb",error)
        process.exit(1)// exit with failure

    };
    
}
