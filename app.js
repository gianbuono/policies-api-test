require('dotenv').config()
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var policiesRouter = require('./routes/policies');
var authentication = require('./authentication');
// Set up mongoose connection
const mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var seeder = require('./seeder')
var app = express();

function errorHandler(err, req, res, next) {
    res.status(500).json({ error: err });
}

app.use(logger('dev'));
app.use(cors());
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('*',authentication)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/policies', policiesRouter);

seeder();

module.exports = app;
