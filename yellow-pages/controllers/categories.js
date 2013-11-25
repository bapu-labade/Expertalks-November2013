var Categories = function(){

};

Categories.prototype.getCategories = function(req,res){
		res.render("index",{"title" : "Categories"});
};

var categories = new Categories();
exports.getCategories = categories.getCategories;