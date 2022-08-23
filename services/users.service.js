const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')
// const bcrypt = require('bcrypt')

class UserService {
  async getAll () {
    const users = await models.User.findAll({ attributes: { exclude: ['password'] } })
    if (users.length === 0) {
      throw boom.notFound('There is no users registered')
    }
    if (!users) {
      throw boom.notFound('Users not found')
    }
    return users
  }

  async getById (id) {
    const user = await models.User.findByPk(id, { attributes: { exclude: ['password'] } })
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user
  }

  async create (user) {
    try {
      const newUser = await models.User.create(user)
      delete newUser.dataValues.password
      return newUser
    } catch (err) {
      throw boom.badRequest(err)
    }
  }
}

module.exports = UserService
