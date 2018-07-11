var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var appRoutes = require('./routes/routes');
console.log('test1')

var app = express();

app.set('views', path.join('../frontend', 'views'));
app.set('view engine', 'html');

app.use('/', appRoutes);

app.use(function(req, res, next) {
    res.render('index');
  });
  
module.exports = app;