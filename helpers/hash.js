import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_PRIVATE_KEY } from '../config.js'

export const makeHash = async (plainText) => {
  const saltRounds = 10
  const results = await bcrypt.hash(plainText, saltRounds)
  return results
}

export const compareHash = async (plainText, hashText) => {
  const results = await bcrypt.compare(plainText, hashText)
  return results
}

export const generateJWT = async (user) => {
  return jwt.sign({ user }, JWT_PRIVATE_KEY)
}
