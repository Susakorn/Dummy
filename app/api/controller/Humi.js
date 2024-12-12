const express = require('express'); //ส่งข้อมูลไป database
const app = express();
const HumitempModel = require('../model/HumitempModel');
const SoilModel = require('../model/soil');
app.post("/HumiTemps",async(req,res) => {
    try {
        return console.log('Hi');
        const HumiAll = await HumitempModel.findAll({
            order: [["id","DESC"]],
            LIMIT:20
        })
        res.send({message: "success",HumiAll:HumiAll})
    } catch (error) {
        res.statusCode = 500
        res.send({message : error.message})
    }
})


module.exports = app;