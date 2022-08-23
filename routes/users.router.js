const express = require('express')
const validatorHandler = require('../middlewares/validator.handler')
const { getUserSchema, createUserSchema } = require('../schemas/users.schema')
const UserService = require('../services/users.service')
// const passport = require('passport')
// const boom = require('@hapi/boom')

const router = express.Router()
const service = new UserService()

router.get('/', async (req, res, next) => {
  try {
    const users = await service.getAll()
    res.send(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const user = await service.getById(req.params.id)
      res.send(user)
    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const user = await service.create(req.body)
      res.send(user)
    } catch (err) {
      next(err)
    }
  })

module.exports = router
