/**
 * Created by yanglu on 4/12/17.
 */
var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var engine = require("ejs-mate");
var session = require("express-session");

var app = express();

//public folder contains all static files
app.use(express.static("public"));
//name ejs-mate
app.engine("ejs", engine);
//set view engine
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    //ejs --> render()
    res.render('index');
});

app.listen(3000, function () {
    console.log("listening port 3000");
})