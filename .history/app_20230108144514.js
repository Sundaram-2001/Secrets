const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const ejs=require("ejs");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB");


const userSchema={
    email:String,
    password:String
}

const User=new mongoose.model("User",userSchema);

app.get("/",function(req,res){
    res.render("home");
})
app.get("/login",function(req,res){
    res.render("login");
})
app.get("/register",function(req,res){
    res.render("register");
})

app.post(function(req,res){
    const newUser=new User(
        email=req.body.username,
        password=req.body.password
    )
    new 
})


app.post("/login",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    User.findOne({email:username,password:password} )

})






app.listen(3000,function (req,res) {
    console.log("Server is up and running!");    
})