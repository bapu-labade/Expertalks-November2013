
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var main = require('./routes/index');
var shops = require('./routes/shops');
var categories = require('./routes/categories');

var http = require('http');
var path = require('path');
var db = require('mongodb');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('MongoDB-ExperTalk'));
app.use(express.session());
app.use(express.compress());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'),{ maxAge: 3600000 }));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/categories', categories.getCategories);
app.get('/categories/:category', categories.getListingsByCategory);
app.get('/listings', shops.getShops);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
