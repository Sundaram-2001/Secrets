const express=require("express");
const bodyParser=require("body-parser");
const mongoose=req
const ejs=require("ejs");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
})
app.get("/login",function(req,res){
    res.render("login");
})
app.get("/register",function(req,res){
    res.render("register");
})







app.listen(3000,function (req,res) {
    console.log("Server is up and running!");    
})