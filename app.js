const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);

const authRouter = require('./routes/auth')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todoListsRouter = require('./routes/todolist')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
      secret: 'fueledByLionsMane',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todolists', todoListsRouter);

module.exports = app;
