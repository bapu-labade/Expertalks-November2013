var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var Categories = function(){
	this.mongoClient = new MongoClient(new Server('localhost','27017',{auto_reconnect: true},{}));
	self = this;
	this.mongoClient.open(function(error, client){
		if(error){
			console.log("Could not connect to MongoDB. " + error);
		}else{
			console.log("Connected to MongoDb" );
			this.db = client.db("expertalks_demo");
			console.log("Connected to ExperTalks.");
		}
	});
};

Categories.prototype.getCategories = function(req,res){
	this.db.collection('categories', function(error, collection) {
    if( error )
    	{
    		res.render("error",
			{
				title : "Rat in ther server", 
				error: error
			});
    	}
    else {
	    	var cursor = collection.find().sort({"name" : 1});
	    	cursor.toArray(function(err, categories){
		    	res.render("categories",
					{
						title : "Categories" , 
						categories: categories
					});
	    	});
    	}
    });
};

Categories.prototype.getListingsByCategory = function(req,res){
	console.log("Getting listings for category : " + req.params.category);
	this.db.collection('listings', function(error, collection) {
    if( error )
    	{
    		res.render("error",
			{
				title : "Rat in ther server", 
				error: error
			});
    	}
    else {
    	var cursor = collection.find({"category" : req.params.category},{"reviews" : 0}).limit(10);
    	cursor.toArray(function(err, listings){
	    	res.render("listings",
				{
					title : req.params.category , 
					listings: listings
				});
    	});
    }
  });
		
};


module.exports = new Categories();