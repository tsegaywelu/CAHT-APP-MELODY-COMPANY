import User from "../models/usermodel.js";



export const registeruser=async (req,res)=>{

   try{
    const {password,username,fullname,gender}=req.body;

   const incominguser=await User.findOne({username});
   if(incominguser){
    res.status(400).send("there is alreadey a user with this username!")
   }

   }
catch(error){
    
}


}

export const login=(req,res)=>{
    res.send("login page")
}
export const logout=(req,res)=>{
    res.send("logout page")
}



