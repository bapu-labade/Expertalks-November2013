Expertalks-November2013
=======================

<h1>Why my MongoDB is slow?</h1>

This ExpertTalks focuses on the slow performance of MongoDB in the absense of indexes or incorrect indexes.
This Git repo contains the example appliction which contains skeleton of a Yellow Pages applications using Node.js and MongoDB.

<h2>Using scripts to generate data</h2>

  - Go to <b>scripts</b> folder.
  - Make sure your MongoDB is running on localhost and port 27017.
  - Run following command to open mongo shell<code>>mongo expertalks_demo</code> 
  - Load <b>listingGenerator.js</b> using : <code>>load('listingGenerator.js')</code>
  - Generate lot of listings <code>>createListings(1000000)</code>
  - Now you should get a <b>listings</b> collection with 1 million documents.
  - Verify the data using: <code>db.listings.findOne()</code>
  - You should see a listings document with <b>title</b>, <b>averageRatings</b>, <b>category</b>, <b>description</b>, <b>address</b> and <b>reviews</b>.

The schema of our listing is as bellow:
```
{
	"title" : "Anand's pizza",
	"description" : "Some information",
	"address" : {
		"city" : "Pune",
		"state" : "Maharashtra"
	},
	"averageRating" : 4.0,
	"category" : "food",
	"reviews" : [
		{
			"title" : "Very good food",
			"content" : "I like this pizza",
			"rating" : 4.0,
			"postDate" : ISODate("2013-11-13")
		}
	 ]
}
```


<h2>Running the Yellow Page app</h2>
The Yellow Page test application is built using Node.js and Express. 
To start the app 
  - Navigate to <b>yellow-pages</b> directory
  - Install **Node** modules using **npm** as <code>>npm install</code>
  - Run following command to start Express server.</br><code>>node app.js</code>
  - By default the Express server will start on port 3000
  - Open browser and navigate to <code>http://localhost:3000/</code>
  - You should now see the home page of Yellow Page test application

