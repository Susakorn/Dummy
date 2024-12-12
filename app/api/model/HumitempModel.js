
    const conn =require('../connect');
    const { Sequelize, DataTypes } = require('sequelize');
    const HumitempModel = conn.define('HumiTemp',{
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        Humi:{
            type: DataTypes.STRING,
            defaultValue:"-"
        },
        Temp:{
            type: DataTypes.STRING,
            defaultValue:"-"
        },
        Humi2:{
            type: DataTypes.STRING,
            defaultValue:"-"
        }
    })

    HumitempModel.sync({alter:true});

    module.exports = HumitempModel;

