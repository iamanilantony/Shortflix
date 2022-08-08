var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3000;
const connectDB = require('./server/database/connection')
const cors = require('cors');
const sessions = require('express-session');
// const sessionstore = require('./server/database/sessionconnection');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


//midddlewire
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With ,Content-Type,Authorization ,Accept",
    "HTTP/1.1 200 OK",
    "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});

//connecr db
connectDB();

//config
dotenv.config({path:'config.env'})


//set sessions
// const oneday = 1000 * 60 * 60 * 24;
// app.use(sessions({
//   secret:'thisisasecretkeyanil',
//   saveUninitialized: true,
//   cookie: {maxAge:oneday},
//   resave: false,
//   store: sessionstore
// }))

//set cookie
app.use(cookieParser());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.json('error tis   ');
  next();
});

//set router
app.use('/',require('./server/routes/router'))


//set port
app.listen(port,()=>{
  console.log("server listening to port "+port);
});

module.exports = app;
