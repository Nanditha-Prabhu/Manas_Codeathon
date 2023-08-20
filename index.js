const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("first",{userName:"Satwik Kamath",score:0});
})

app.post("/second",function(req,res){
    userName= req.body.userName;
    ans=req.body.ans;
    score=req.body.score;

    if(ans=="1")
        score++;


    res.render("second",{userName:userName,score:score});
})
app.post("/third",function(req,res){
    userName= req.body.userName;
    ans=req.body.ans;
    score=req.body.score;

    if(ans=="1")
        score++;
    res.render("third",{userName:userName,score:score});
})
app.post("/fourth",function(req,res){
    userName= req.body.userName;
    ans=req.body.ans;
    score=req.body.score;

    if(ans=="1")
        score++;
    res.render("fourth",{userName:userName,score:score});
})
app.post("/fifth",function(req,res){
    userName= req.body.userName;
    ans=req.body.ans;
    score=req.body.score;

    if(ans=="1")
        score++;
    res.render("fifth",{userName:userName,score:score});
})
app.post("/sixth",function(req,res){
    userName= req.body.userName;
    ans=req.body.ans;
    score=req.body.score;

    if(ans=="1")
        score++;
    res.render("sixth",{userName:userName,score:score});
})
app.post("/seventh",function(req,res){
    userName= req.body.userName;
    ans=req.body.ans;
    score=req.body.score;

    if(ans=="1")
        score++;
    res.render("end");
})

app.listen(3000,function(){
    console.log("Running");
})