'use strict';
const db = require('./db.json'),
      menu = db.menu,
      bmiList = db.bmiList,
      project = db.project,
      result = db.result;
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require("body-parser")

app.listen(port, () => console.log('Сервер запущен', port));

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/assets'))


app.get('/list', (request, response) => {
    response.json(bmiList);
})

app.get('/project', (request, response) => {
    response.json(project);
})

app.get('/result', (request, response) => {
    let params = request.query;
    let bmiRaw = params.weight / Math.pow((params.height / 100), 2);
    let bmi = parseFloat(bmiRaw.toFixed(1));
    let type;

    if(bmi <= 16) {
        type = db.result.type[0];
    } else if(bmi <= 18.5) {
        type = db.result.type[1];
    } else if(bmi <= 25) {
        type = db.result.type[2];
    } else if(bmi <= 30) {
        type = db.result.type[3];
    } else if(bmi <= 35) {
        type = db.result.type[4];
    } else if(bmi <= 40) {
        type = db.result.type[5];
    } else {
        type = db.result.type[6];
    }

    let responseData = {
        "title": db.result.title,
        "bmi": bmi,
        "type": type
    }
    response.json(responseData);
})

app.get('/menu', (request, response) => {
    let params = request.query;
    let bmi = params.bmi;
    if(bmi < 18.5) {
        response.json(menu.low)
    }  else if(bmi >= 30) {
        response.json(menu.high)
    } else {
        response.json(menu.medium)
    }
})