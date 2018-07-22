var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var appRoutes = require('./routes/routes');
var hbs = require('handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/../frontend/views')));
app.use('/', appRoutes);

app.use(function(req, res, next) {
    res.render('index');
  });

module.exports = app;