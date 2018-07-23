const mongoose = require('mongoose');

const Campground = require("./models/campground");
const Comment =require("./models/comment")

var data = [
	{
		name : "Puri",
		image: "https://i2.wp.com/farm1.staticflickr.com/431/32493470682_eae3150535_b.jpg?ssl=1",
		description: "Puri is the best place. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name : "Goa",
		image: "http://www.indiatravelspot.com/sites/default/files/imagecache/680scale/goa_beach__1392141335.jpg",
		description: "Goa is the best place and Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name : "Bangalore",
		image: "http://www.weekendthrill.com/wp-content/uploads/2017/07/2-min-1.jpg",
		description: "Bangalore is the best place and Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo						consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]

var seedDB = () =>{
	Campground.remove({}, (err) =>{
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log("REMOVED CAMPGROUNDS");
// 	data.forEach((seed)=>{
// 		Campground.create(seed, (err, data) =>{
// 			if(err)
// 				console.log(err);
// 			else{
// 				console.log("Added a new campground");
// 			 Comment.create({
// 			 	text: "This is a great place but a little dirty",
// 			 	author: "Gourav"
// 			 }, (err, comment) => {
// 			 	if(err)
// 			 		console.log(err)
// 			 	else{
// 			 		data.comments.push(comment);
// 			 		data.save();
// 			 		console.log("created a new comment");
// 			 	}
// 			 });
// 			}
			 
// 		});
// 	});
 });
	
}

module.exports = seedDB;
