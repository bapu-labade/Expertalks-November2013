// var listing = {
// 	"title" : "Anand's pizza",
// 	"description" : "Some information",
// 	"address" : {
// 		"city" : "Pune",
// 		"state" : "Maharashtra"
// 	},
// 	"averageRating" : 4.0,
// 	"category" : "food",
// 	"reviews" : [
// 		{
// 			"title" : "Very good food",
// 			"content" : "I like this pizza",
// 			"rating" : 4.0,
// 			"postDate" : ISODate("2013-11-13")
// 		}
// 	]
// };

load('/Users/hpradip/Desktop/cities.js');

var createListings = function (count) {
	for (var i = 0; i < count; i++) {
		var listing = getRandomListing();
		db.listings.insert(listing);
	}
};

var getRandomListing = function(){
	var title = getRandomTitle();
	var description = getRandomDescription();
	var address = getRandomAddress();
	var category = getRandomCategory();
	var reviews = getRandomReviews(); 

	var listing = {
		title : title,
		description : description,
		address : address,
		category : category,
		reviews : reviews,
		averageRating : getAverageRating(reviews)
	}

	return listing;
};

var getAverageRating = function(reviews){
	if(reviews.length==0)
	{
		return 0;
	}

	var totalRating = 0;
	for (index in reviews) {
		totalRating += reviews[index].rating;
	};
	return Math.round(totalRating/reviews.length*10)/10;
};

var getRandomTitle = function(){
	return getRandomText(10);
};

var getRandomText = function(maxLength){
	var loremIpsum = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";
	var words = loremIpsum.split(' ');
	var start = getPositiveRandomInt(maxLength - 5);
	var end =  getPositiveRandomInt(maxLength - 1,start);
	var text = words.slice(start,end);
	return text.join(" ");
};

var getPositiveRandomInt = function(max,min){
	if(!min){
		min = 0;
	}
	var randomInt = Math.floor(Math.random()*max);
	if(randomInt < min){
		randomInt = getPositiveRandomInt(max, min);
	}
	return randomInt;
};

var getRandomDescription = function(){
	return getRandomText(50);
};

var getRandomAddress = function(){
	var state = states[getPositiveRandomInt(states.length-1)];
	var city = state.cities[getPositiveRandomInt(state.cities.length-1)];
	return {
		city : city,
		state : state.name
	};
};

var getRandomCategory = function(){
	var categories = ["Food","Entertainment", "Hotel", "Sports", "Health & Beauty", "travel", "Eduction", "Real Estate"];
	return categories[getPositiveRandomInt(categories.length-1)];
};

var getRandomReviews = function(){
	var count = getPositiveRandomInt(10);
	var reviews = [];
	for (var i = 0; i < count; i++) {
		reviews.push(getRandomReview());
	}
	return reviews;	
};

var getRandomReview = function(){
	var title = getRandomTitle();
	var content = getRandomDescription();
	var maxRating = 5;
	var rating = getRandomRating(maxRating);
	var date = getRandomDate();

	return {
		title : title,
		content : content,
		rating : rating,
		postDate : date
	}
};

var getRandomRating = function(maxRating){
	var rating = getPositiveRandomInt(5);
	var fraction = Math.random() > 0.5 ? 0.0 : 0.5;
	return rating + fraction;
};

var getRandomDate = function(){
	var start = new Date(2001,0,1);
	var end = new Date();
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
