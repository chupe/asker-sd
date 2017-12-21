const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  expressHbs = require('express-handlebars'),
  dbConnection = require('./db'),
  dotenv = require('dotenv').config(),
  session = require('express-session'),
  passport = require('passport'),
  flash = require('connect-flash'),
  validator = require('express-validator'),
  MongoStore = require('connect-mongo')(session)


let index = require('./routes/index'),
  user = require('./routes/user'),
  members = require('./routes/members'),
  merchandise = require('./routes/merchandise')


require('./config/passport')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }))
app.set('view engine', '.hbs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'superSecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: dbConnection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(validator())
app.use(cookieParser())
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated()
  res.locals.session = req.session
  next()
})

app.use('/user', user)
app.use('/members', members)
app.use('/merchandise', merchandise)
app.use('/', index)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 404)
  res.render('error')
})

module.exports = app
