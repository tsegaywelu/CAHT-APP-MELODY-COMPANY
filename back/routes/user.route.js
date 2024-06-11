import express from 'express'

import { registeruser,login,logout } from '../controllers/user.controller.js';
const router=express.Router();
router.post('/',registeruser)

router.post('login',login)
router.get('/logout',logout)


export {router}
 


