import express from 'express'
import  dotenv from'dotenv'
import connectToMongodb from './DB/db.js'//but here to connect i have to call the function connectToMongodb()\
import {router as userrouter} from './routes/user.route.js'

dotenv.config();
const app=express();
app.use('/api/user',userrouter)
app.listen(process.env.PORT||3000,()=>{
    connectToMongodb();
    console.log(`app running on   port ${process.env.PORT}`);
})
