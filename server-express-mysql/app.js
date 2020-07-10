var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Jeff: added models variable
var models = require('./models'); 
//Ryan: added CORS
var cors = require("cors");

//delete later not needed
//Passport declaration
// var passport = require('passport');
// var session = require('express-session');

//Delete later not needed
//var tasksRouter = require('./routes/tasks');
var transactionsRouter = require('./routes/transactions');

var app = express();

// Exporting associations from models/index.js - Ryan
// var models = require('./models');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());

//Ryan: added app.use(cors())
app.use(cors());

//Jeff: added CORS code
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Delete later not needed
//Passport
// app.use(session({secret: 'perilous journey'}));
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', require('./routes/index'));

// Signup and Login (YouTube MERN)
app.use('/user', require('./routes/users'));
// app.use('auth', require('./services/auth'));

// app.use('/users', usersRouter);
//Delete Later Not needed
// app.use('/tasks', tasksRouter);
app.use('/transactions', transactionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.send("Error 500")
});

//Jeff: added data sync'd message
models.sequelize.sync().then(function() {
  console.log("DB Sync'd Up!")
});

module.exports = app;
