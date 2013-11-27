var mongo = require('./mongo')

var Categories = function(){
	
};

Categories.prototype.getCategories = function(req,res){
	mongo.getCollection('categories', function(error, collection) {
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
	mongo.getCollection('listings', function(error, collection) {
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