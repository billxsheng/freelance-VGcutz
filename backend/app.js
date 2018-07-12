var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var appRoutes = require('./routes/routes');

var app = express();

app.set('views', path.join('../frontend', 'views'));
app.set('view engine', 'html');

app.use('/', appRoutes);

app.use(function(req, res, next) {
    res.render('index');
  });
  
module.exports = app;