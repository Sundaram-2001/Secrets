const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));











app.listen(3000,function (eq) {
    
})