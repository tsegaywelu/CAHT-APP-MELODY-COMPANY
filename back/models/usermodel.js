import mongoose  from "mongoose";
const usershema=new mongoose.Schema({
    fullname:{
        type:string,
        required:true
    },
    username:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true,
        minlength:5,
        
    },
    gender:{
        type:string,
        required:true,
        enum:["male","female"]
    },
    profilepic:{
        type:string,
        default:""
    }
})

const User=mongoose.model("User",usershema)
export default User;