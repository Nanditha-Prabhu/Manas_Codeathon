const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("first");
})

app.get("/second",function(req,res){
    res.render("second");
})
app.get("/third",function(req,res){
    res.render("third");
})

app.listen(3000,function(){
    console.log("Running");
})