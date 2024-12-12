const conn =require('../connect');
const { Sequelize, DataTypes } = require('sequelize');
const SoilModel = conn.define('SoilModel',{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    Humi2:{
        type: DataTypes.STRING,
        defaultValue:"-"
    }
})

SoilModel.sync({alter:true});

module.exports = SoilModel;