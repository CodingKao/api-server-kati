'use strict';

const express = require('express');
const cors = require('cors');
const { coffeeModel } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());
const coffeeRouter = require('./routes/coffee');
const coffee = require('./models/coffee');


app.get('/', (req, res, next) => {
    res.status(200).send('The bread has risen');
});

app.get('/coffee', async(req, res, next) => {
    let coffees = await coffeeModel.findAll();
    res.status(200).send(coffees);
});

app.post('/coffee', async(rec, res, next) =>{
    let newCoffee = await coffeeModel.create(req.body);

    res.status(200).send(newCoffee);
});

const start = (port) => app.listen(port, () => console.log ('dem servers do be runnin doe', port));

module.exports = {
    app,
    start,
};