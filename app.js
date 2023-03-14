require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var outboundRouter = require('./routes/outbound');
var cors = require('cors');

var app = express();

// const swaggerUi = require('swagger-ui-express');
// const apiDocumentation = require('./apidocs.json');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/outbound', outboundRouter)

module.exports = app;
