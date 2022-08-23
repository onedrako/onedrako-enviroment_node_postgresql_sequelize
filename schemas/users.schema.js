const Joi = require('joi')

const id = Joi.number().integer()
const nickName = Joi.string()
const email = Joi.string()
const password = Joi.string()
const role = Joi.string()
// const recoveryToken = Joi.string()

const createUserSchema = Joi.object({
  nickName: nickName.required().min(6),
  email: email.required(),
  password: password.required().min(4),
  role: role.default('user')
})

const getUserSchema = Joi.object({
  id: id.required()
})

// const updateUserSchema = Joi.object({
//   nickName: nickName,
//   email: email,
//   password: password,
//   recoveryToken: recoveryToken
// })

module.exports = { createUserSchema, getUserSchema }
