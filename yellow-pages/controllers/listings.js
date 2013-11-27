var mongo = require('./mongo');
var ObjectID = require('mongodb').ObjectID;
var Listings = function(){
	
}

Listings.prototype.getById = function(req,res) {
	var listingId = req.params.id;
	mongo.getCollection("listings",function(err,collection){
		if(err){
			res.render("error",
			{
				title : "Rats in ther server", 
				error: error
			});
		}
		else{

			collection.findOne({"_id": new ObjectID(listingId)},function(err,listing){
				if(err){
					console.log(error);
				}
				res.render("listing",{ title : listing.title, listing : listing});
			})
		}
	})
};

module.exports =  new Listings();