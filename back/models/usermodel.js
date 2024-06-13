import mongoose  from "mongoose";
const usershema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilepic:{
        type:String,
        default:""
    }
})

const User=mongoose.model("User",usershema)
export default User;