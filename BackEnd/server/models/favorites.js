// models/favorites.js


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configDB');
const User = require('./user');

const Favorites = sequelize.define('Favorites', {
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

Favorites.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Favorites;
