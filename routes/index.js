var express = require("express");
var router = express.Router();
const passport = require('passport');
const User = require("../models/user");
var Campground = require("../models/campground");
var Comment = require("../models/comment");



router.get('/', (req, res)=>{
	res.render("landing");
})




router.get("/register", (req, res) => {
	res.render("register");
})

router.post("/register", (req, res) =>{
	 var newUser = new User({username: req.body.username});
	 User.register(newUser, req.body.password, (err, user) =>{
	 	if(err){
	 		req.flash("error", err.message);
	 		return res.render("register");
	 	}
	 	passport.authenticate("local")(req, res, () =>{
	 		req.flash("error", "Welcome to Indian Tourist Spot" + user.username);
	 		res.redirect("/campgrounds");
	 	})
	 })
})

router.get("/login", (req, res) =>{
	res.render("login");
})

router.post("/login", passport.authenticate("local",
	{
		successRedirect: "/campgrounds",
		failureRedirect: "/login"
	}), (req,res) =>{

})

router.get("/logout", (req, res) =>{
	req.logout();
	req.flash("success", "You have been Logged out");
	res.redirect("/campgrounds");
});



module.exports = router;