var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const userInfoRouter = require("./routes/userInfo");

var app = express();
const secret = "secretOrPrivateKeyXXXX"

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressJwt({
    secret,
    algorithms: ["HS256"],  // ?
})
    .unless({ // 指定不经token解析的路径
      path: [/\/*/g, "/", "/users/register"],   // 支持正则
    }))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/userInfo", userInfoRouter);


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
  res.render('error');
});

// 数据库:
mongoose.connect("mongodb://localhost/user");
mongoose.Promise = global.Promise;
// 取得默认连接
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB 连接错误："));
module.exports = app;
