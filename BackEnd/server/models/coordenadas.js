// models/coordernadas.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configDB');
const User = require('./user');

const Coordenadas = sequelize.define('Coordenadas', {
  IdCoord: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  Longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  },
  EsportesPraticados: {
    type: DataTypes.STRING
  }
});

Coordenadas.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Coordenadas;
