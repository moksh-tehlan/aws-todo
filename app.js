const express = require('express');
const logger = require('morgan');
const todoRouter = require('./routes/todo.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/todos',todoRouter);

module.exports = app;
