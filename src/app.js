const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');

const paginate = require('express-paginate')

const userlogs = require('./middlewares/userLogs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const charactersRouter = require('./routes/characters');
const sectionsRouter = require('./routes/sections');

const apisRouter = require('./routes/api.routes');

const userSessionCheck = require('./middlewares/userSessionCheck');
const cookieCheck = require('./middlewares/cookieCheck');

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(paginate.middleware(4, 50))

app.use(methodOverride('_method'));

app.use(userlogs);

app.use(session({
  secret : "raicesA",
  resave : true,
  saveUninitialized : true,
}))

app.use(cookieCheck); 
app.use(userSessionCheck);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/characters', charactersRouter);
app.use('/sections', sectionsRouter);

app.use('/api', apisRouter);

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

module.exports = app;
