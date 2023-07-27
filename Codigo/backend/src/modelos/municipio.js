const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Municipio = db.define('Municipio', {
    mun_codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    mun_nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mun_descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mun_ubicacion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mun_presupuesto: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
  tableName: 'MUNICIPIO',
  timestamps: false
});

module.exports = Municipio;