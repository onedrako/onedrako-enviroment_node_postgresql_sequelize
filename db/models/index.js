const { User, UserSchema } = require('./users.model')

const setUpModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize))
}

module.exports = setUpModels
