const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const createPath = require('./helpers/create-path');

const app = express();
const PORT = process.env.PORT || 3000;

const errorMessage = chalk.bgKeyword('white').redBright;
const successMessage = chalk.bgKeyword('green').white;

app.set('view engine', 'ejs');

app.listen(PORT, error => {
  error ? console.log(errorMessage(error)) : console.log(successMessage(`Listening on ${PORT}`));
});

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.use(morgan(`${process.env.LOG_LEVEL || 'tiny'}`));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use((req, res) => {
  res
    .status(404)
    .send('404');
});