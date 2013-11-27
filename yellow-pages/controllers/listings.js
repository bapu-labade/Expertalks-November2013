var mongo = require('./mongo');
var Listings = function(){
	
}

Listings.prototype.getById = function(req,res) {
	var listingId = req.param.id 
	
	mongo.getCollection("listings",function(err,collection){
		if(err){
			req.render("error");
		}
		else{
			collection.findOne({"_id":listingId},function(err,listing){
				res.render("listing",listing);
			})
		}
	})
};

module.exports =  new Listings();