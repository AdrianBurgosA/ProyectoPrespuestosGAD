const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Usuario = db.define('Usuario', {
    usu_codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dep_codigo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    proy_nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    proy_descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    proy_fechaInicio: {
        type: DataTypes.DATE,
        allowNull: true
    },
    proy_fechaFin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    proy_presupuesto: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    proy_riesgos: {
        type: DataTypes.STRING,
        allowNull: true
    },
    proy_recursos: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
  tableName: 'USUARIO'
});

module.exports = Usuario;