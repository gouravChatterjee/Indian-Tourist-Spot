var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middlewareObj ={};

middlewareObj.checkCampgroundOwnership = (req, res, next) =>{
	if(req.isAuthenticated()){
		Campground.findById(req.params.id, (err, foundCamp)=>{
			if(err){
				res.redirect("back");
			}else{
				if(foundCamp.author.id.equals(req.user._id)){
					next();
				}else{
					req.flash("error", "You don't have permission to do that");
					res.redirect("back");
				}
				
			}
		})
	}else{
		req.flash("error", "You need to be logged in to do that");
		res.redirect("back");
	}
}

middlewareObj.checkCommentOwnership = (req, res, next) =>{
if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id, (err, foundComment)=>{
			if(err){
				req.flash("error", "Not Found");
				res.redirect("back");
			}else{
				if(foundComment.author.id.equals(req.user._id)){
					next();
				}else{
					req.flash("error", "You don't have permission to do that");
					res.redirect("back");
				}
				
			}
		})
	}else{
		req.flash("error", "You need to be logged in to do that");
		res.redirect("back");
	}
}

middlewareObj.isLoggedIn = (req, res, next) =>{
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You need to be logged in to do that");
	res.redirect("/login");
}


module.exports = middlewareObj;