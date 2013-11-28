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

    	var limit = 20;
    	var sort = req.query.sort;
    	var order = 1;
    	if(!sort){
    		sort = "title";
    		order = 1;
    	}else{
    		if(sort=="averageRating"){
    			order = -1;
    		}
    	}
    	var sortOrder = JSON.parse("{ \"" + sort + "\" : "+ order +"}");

    	var page = req.query.page;
    	if(!page){
    		page = 1;
    	}
    	var skip = limit*(page-1);

    	var query = {"category" : req.params.category};
    	var proj ={"reviews" : 0};
    	var options = { fields : proj, sort : sortOrder, limit :limit, skip :skip};
    	var count = collection.count(query, function (err, total) {
    		if(err){
    			console.log(err);
    		}
	    	var cursor = collection.find(query,options);
	    	cursor.toArray(function(err, listings){
	    		if(err){
	    			console.log(err);
	    		}
		    	res.render("listings",
					{
						title : req.params.category , 
						listings: listings,
						currentPage: page,
						totalPages: parseInt(total/10),
						sort: sort
					});
	    	});
    	});
    	
    }
  });
		
};


module.exports = new Categories();