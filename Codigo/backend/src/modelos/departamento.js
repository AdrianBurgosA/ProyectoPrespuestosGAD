const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Departamento = db.define('Departamento', {
    dep_codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mun_codigo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dep_nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dep_descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dep_presupuesto_total: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    dep_gastos: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
  tableName: 'DEPARTAMENTO'
});

module.exports = Departamento;