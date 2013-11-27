var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var Mongo = function(){
	this.mongoClient = new MongoClient(new Server('localhost','27017',{auto_reconnect: true},{}));
	self = this;
	this.mongoClient.open(function(error, client){
		if(error){
			console.log("Could not connect to MongoDB. " + error);
		}else{
			console.log("Connected to MongoDb" );
			self.db = client.db("expertalks_demo");
			console.log("Connected to ExperTalks.");
		}
	});
}

Mongo.prototype.getCollection = function(collectionName,callback) {
	this.db.collection(collectionName,function(err,collection){
		if(err){
			console.error("following error occured: "+err);
		}
		
		callback(err,collection);
		

	});
};

module.exports =new Mongo();