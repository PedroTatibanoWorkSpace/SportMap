const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configDB');

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PasswordHash: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
