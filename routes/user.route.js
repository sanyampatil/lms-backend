import { Router } from "express";
import { getProfile, login, logout, register } from "../controllers/user.controllers";

const userRouter = Router()
 
router.post('/reguister',register)
router.post('/logout',logout)

router.post('/login',login)

router.post('/me',getProfile)

export default userRouter



