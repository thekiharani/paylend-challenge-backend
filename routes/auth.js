import express from 'express'
import { me, register, login, update, changePassword } from '../controllers/authController.js'
import { auth } from '../middleware/auth.js'
const authRouter = express.Router()

authRouter.get('/me', auth,  me)

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.patch('/update', auth, update)
authRouter.patch('/change_password', auth, changePassword)

export default authRouter
