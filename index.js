const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("first");
})

app.post("/second",function(req,res){
    res.render("second");
})
app.post("/third",function(req,res){
    res.render("third");
})
app.post("/fourth",function(req,res){
    res.render("fourth");
})
app.post("/fifth",function(req,res){
    res.render("fifth");
})
app.post("/sixth",function(req,res){
    res.render("sixth");
})
app.post("/seventh",function(req,res){
    res.render("seventh");
})

app.listen(3000,function(){
    console.log("Running");
})