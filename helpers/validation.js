import Joi from 'joi'

export const signupValidation = (user) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string().required(),
    dob: Joi.string().required(),
    password: Joi.string().required(),
  })

  return schema.validate(user)
}

export const signinValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })

  return schema.validate(user)
}

export const updateValidation = (user) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string().required(),
    dob: Joi.string().required(),
  })

  return schema.validate(user)
}

export const passwordValidation = (user) => {
  const schema = Joi.object({
    current_pass: Joi.string().required(),
    new_pass: Joi.string().required(),
  })

  return schema.validate(user)
}
