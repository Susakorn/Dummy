const express = require('express');
const cors = require('cors'); ///มาพร้อม DATA BASE//
const app = express();
const port = 1880

app.use(cors());

const Humi = require('./controller/Humi');

app.use(Humi);

app.listen(port, () => {
    console.log('listen on port', port);
})

