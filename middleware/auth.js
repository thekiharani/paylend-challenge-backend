import jwt from 'jsonwebtoken'
import { JWT_PRIVATE_KEY } from '../config.js'

export const auth = (req, res, next) => {
  try {
    const token = req.header('x-auth-token')
    if (!token) return res.status(403).json({ message: 'access denied' })

    const decoded = jwt.verify(token, JWT_PRIVATE_KEY)
    req.user = decoded
    next()
  } catch (error) {
    res.status(400).send({ message: 'invalid token' })
  }
}
