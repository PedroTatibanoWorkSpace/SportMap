// models/history.js


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configDB');
const User = require('./user');

const History = sequelize.define('History', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING
  },
  nome: {
    type: DataTypes.STRING
  },
  esporte: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8)
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8)
  }
});

History.belongsTo(User, { foreignKey: 'user_id' });

module.exports = History;