import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MOGNO_DB_URL, )
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connectig to MongoDB", error.message)
    }
};


export default connectToMongoDB