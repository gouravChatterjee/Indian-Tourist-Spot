var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");



router.get("/campgrounds", (req, res) => {
	
	Campground.find({}, (err, allCampgrounds) => {
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/index", {campgrounds:allCampgrounds, currentUser: req.user});
		}
	});
	
});

router.post('/index', middleware.isLoggedIn, (req, res) => {
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var price = req.body.price;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = { name:name, image:image, description:desc, author: author, price: price}
	Campground.create(newCampground, (err, newlyCreated) => {
		if(err){
			console.log(err);

		}else{
			req.flash("success", "A new campground is Created ");
			res.redirect("/campgrounds");
		}
	})
	  
})

router.get("/campgrounds/new", middleware.isLoggedIn, (req, res) =>{
	res.render("campgrounds/new.ejs");
})
router.get('/campgrounds/:id', (req, res) => {
	Campground.findById(req.params.id).populate("comments").exec((err, foundCamp) => {
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/shows.ejs", {campground: foundCamp});
		}
	})
	
})

router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, (req, res) =>{
	Campground.findById(req.params.id, (err, foundCamp) => {
		res.render("campgrounds/edit", {campground: foundCamp});
	})
})
router.put("/campgrounds/:id", middleware.checkCampgroundOwnership, (req, res) =>{
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCamp)=>{
		if(err){
			res.redirect("/campgrounds");
		}else{
			req.flash("success", "The campground is Edited ");
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
})
router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, (req, res) =>{

	Campground.findByIdAndRemove(req.params.id, (err)=>{
		if(err){
			res.redirect("/campgrounds");
		}else{
			req.flash("success", "Campground Deleted");
			res.redirect("/campgrounds");
		}
	})
})






module.exports = router;