const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override');
const Comment = require('./models/comment');

const Campground = require("./models/campground");
const User = require("./models/user");
const seedDB = require("./seeds");

const campgroundRoutes = require("./routes/campgrounds");
const commentRoutes = require("./routes/comments");
const indexRoutes = require("./routes/index");



mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

app.use(require("express-session")({
	secret: "Shiro is the cutest dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
})

app.use(campgroundRoutes);
app.use(indexRoutes);
app.use(commentRoutes);

app.listen(3000, ()=>{
	console.log('app is running on port 3000');
})