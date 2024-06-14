import User from "../models/usermodel.js";
import Token from '../Utils/jeneratetoken.js'
import bcryptjs from 'bcryptjs'
//registration for users 
export const registeruser=async (req,res)=>{

   try{

    const {password,username,fullname,gender}=req.body;
   const incominguser=await User.findOne({username});

   if(incominguser){
    return res.status(400).send("there is alreadey a user with this username!")
   }

// i will hash the password here 
const salt=await bcryptjs.genSalt(10)
const hashedpassword=await bcryptjs.hash(password,salt)
//the images are form   https://avatar-placeholder.iran.liara.run/
const boyprofilepic='https://avatar.iran.liara.run/public'
const girlprofilepic='https://avatar.iran.liara.run/public/girl'

const adduser=new User.create({
    fullname,username,password:hashedpassword,gender,profilepic:gender=="male" ? boyprofilepic:girlprofilepic
})

if(adduser){
    await adduser.save()
   res.status(201).send({
    _id:adduser._id,
    fullname:adduser.fullname,
    username:adduser.username,
    profilepic:adduser.profilepic

})
//generating the jwt here 


}

}
catch(error){
 console.log(error);
 res.status(500).send("internal server error ")
    
}

}
//for login users
export const login=(req,res)=>{
    res.send("login page")
}
//for logout
export const logout=(req,res)=>{
    res.send("logout page")
}



