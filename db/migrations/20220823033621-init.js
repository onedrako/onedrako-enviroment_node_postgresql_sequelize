'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      nickName: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        min: 8
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'user'
      },
      recoveryToken: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
