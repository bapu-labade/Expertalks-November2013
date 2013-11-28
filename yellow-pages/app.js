
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./controllers');

var main = require('./controllers/index');
var listings = require('./controllers/listings');
var categories = require('./controllers/categories');

var http = require('http');
var path = require('path');
var mongodb = require('mongodb');

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
// app.use(new function(req,res,next){

// 	    var limit = 20;
//     	var sort = req.query.sort;
//     	var order = 1;
//     	if(!sort){
//     		sort = {"title":1};
//     	}else{
//     		if(sort=="averageRating"){
//     			order = -1;
//     		}
//     		sort = JSON.parse("{ \"" + req.query.sort + "\" : "+ order +"}");
//     	}

//     	var page = req.query.page;
//     	if(!page){
//     		page = 1;
//     	}
//     	var skip = limit*(page-1);
//     	req.query.skip = skip;
//     	req.query.page = page;
//     	req.query.sort = sort;

//     	next(req,res);
// });


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', main);
app.get('/categories', categories.getCategories);
app.get('/categories/:category', categories.getListingsByCategory);
app.get('/listings/:id',listings.getById);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
