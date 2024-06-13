//package imports 
import express from 'express'
import  dotenv from'dotenv'

//file imports 
import connectToMongodb from './DB/db.js'//but here to connect i have to call the function connectToMongodb()\
import {router as userrouter} from './routes/user.route.js'

const app=express();
//variable imports
dotenv.config();
const PORT=process.env.PORT||3000


//to parese the incoming requests as json  from front end 
app.use(express.json());
app.use('/api/user',userrouter)


app.listen(PORT,()=>{
    connectToMongodb();
    console.log(`app running on   port ${PORT}`);
})
