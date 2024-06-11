import mongoose from "mongoose"

const connectToMongodb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongodb");

    }
    catch(error){
        console.log("error connecting to the database",error.message);


    }
}
export default connectToMongodb;