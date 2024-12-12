const { Sequelize, Model } = require('sequelize'); ////เขียนโมเดล เขียนdatabase

const sequelize =new Sequelize('dummy','postgres','dummy',{
    host: '192.168.134.128',
    dialect: 'postgres',
    port:5432,
    logging: false
});

module.exports = sequelize

