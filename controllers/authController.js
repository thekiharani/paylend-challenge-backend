import User from '../models/user.js'
import {
  signupValidation,
  signinValidation,
  updateValidation,
  passwordValidation,
} from '../helpers/validation.js'
import { makeHash, compareHash, generateJWT } from '../helpers/hash.js'

export const register = async (req, res) => {
  try {
    const { error } = signupValidation(req.body)
    if (error)
      return res
        .status(422)
        .json({ message: error.details[0].message.replace(/['"]/g, '') })

    const { first_name, last_name, email, gender, dob, password } = req.body

    const user = await User.query().findOne({
      email: email,
    })

    if (user) return res.status(428).json({ message: 'email is already taken' })

    const createdUser = await User.query().insert({
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      dob: new Date(dob),
      password: await makeHash(password),
    })
    return res.status(201).json({ message: 'created', user: createdUser })
  } catch (error) {
    return res.status(500).json({ message: 'error in account creation' })
  }
}

export const login = async (req, res) => {
  try {
    const { error } = signinValidation(req.body)
    if (error) return res.status(422).json(error.details)

    const { email, password } = req.body
    const user = await User.query().findOne({
      email: email,
    })

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }
    const validatePassword = await compareHash(password, user.password)
    if (!validatePassword) {
      return res.status(403).json({ message: 'invalid credentials' })
    }
    const accessToken = await generateJWT(user)
    return res.status(200).json({ token: accessToken })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'error in login attempt' })
  }
}

export const me = async (req, res) => {
  try {
    const user = await User.query().findById(req.user.user.id)
    return res.json({ profile: user })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: 'error in processing your request' })
  }
}

export const update = async (req, res) => {
  try {
    const { error } = updateValidation(req.body)
    if (error)
      return res
        .status(422)
        .json({ message: error.details[0].message.replace(/['"]/g, '') })

    const { first_name, last_name, email, gender, dob, password } = req.body

    const { id } = await req.user.user
    await User.query()
      .findById(id)
      .patch({
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender,
        dob: new Date(dob),
      })

    const user = await User.query().findById(id)
    return res.status(200).json({ message: 'updated', user: user })
  } catch (error) {
    return res.status(400).json({ error: 'error in processing your request' })
  }
}

export const changePassword = async (req, res) => {
  try {
    const { error } = passwordValidation(req.body)
    if (error)
      return res
        .status(422)
        .json({ message: error.details[0].message.replace(/['"]/g, '') })

    const { current_pass, new_pass } = req.body

    const { id } = await req.user.user
    const user = await User.query().findById(id)
    const validatePassword = await compareHash(current_pass, user.password)
    if (!validatePassword) {
      return res.status(403).json({ error: 'current password is incorrect' })
    }
    await User.query()
      .findById(id)
      .patch({
        password: await makeHash(new_pass),
      })

    return res.status(200).json({ message: 'password changed' })
  } catch (error) {
    return res.status(400).json({ error: 'error in processing your request' })
  }
}
