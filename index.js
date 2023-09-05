const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://satwikroopa:Roopa70263@fruitdb.8sxipgz.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
})
const GameUser = mongoose.model("gameUser", userSchema);
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/motivation",function(req,res){
    res.render("motivation")
})

app.get("/", function (req, res) {
    res.render("homePage");
})

app.post("/checkLoginInfo", function (req, res) {
    receivedName = req.body.name;
    receivedPassword = req.body.password;

    GameUser.findOne({ name:receivedName }).then(function (data) {
        if (data) {
            if(receivedPassword==data.password)
                res.json({passwordCorrect: 1,found:1});
            else
                res.json({passwordCorrect: 0,found:1});
        }
        else {
            res.json({passwordCorrect: 0,found:0});
        }
    })
})

app.post("/loginAfterCheck",function(req,res){
    userName =req.body.userName;
    res.render("userMainPage",{userName:userName});
})

app.post("/checkSignUpInfo",function(req,res){
    let receivedName=req.body.name;
    let receivedPswd=req.body.password;
    let receivedAge=req.body.userAge;
    GameUser.findOne({ name:receivedName }).then(function (data) {
        if (data) {
            res.json({msg: 1});
        }
        else {
            const user = new GameUser({
                name: receivedName,
                                
                password: receivedPswd,
                age: receivedAge
            })
            user.save();
            res.json({msg: 0});
        }
    })
})

app.get("/level1",function(req,res){
    res.render("playground",{ level: 2, userName: "Satwik", score: 0, numbers: [4, 6, 2, 9], formPost: "third", options: [{ option: 4620, value: 0 }, { option: 4629, value: 1 }, { option: 4649, value: 0 }, { option: 4639, value: 0 }] })
})
app.post("/second", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;

    res.render("playground", { level: 2, userName: userName, score: score, numbers: [4, 6, 2, 9], formPost: "third", options: [{ option: 4620, value: 0 }, { option: 4629, value: 1 }, { option: 4649, value: 0 }, { option: 4639, value: 0 }] });
})

app.post("/third", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("playground", { level: 3, userName: userName, score: score, numbers: [1, 8, 5, 2, 6], formPost: "fourth", options: [{ option: 18526, value: 1 }, { option: 18525, value: 0 }, { option: 18662, value: 0 }, { option: 18523, value: 0 }] });

})
app.post("/fourth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("playground", { level: 4, userName: userName, score: score, numbers: [2, 4, 7, 3, 9, 2], formPost: "fifth", options: [{ option: 247492, value: 0 }, { option: 247392, value: 1 }, { option: 247385, value: 0 }, { option: 247393, value: 0 }] });
})
app.post("/fifth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("playground", { level: 5, userName: userName, score: score, numbers: [2, 7, 5, 3, 9, 6, 7], formPost: "sixth", options: [{ option: 2753969, value: 0 }, { option: 2753968, value: 0 }, { option: 2753967, value: 1 }, { option: 2753963, value: 0 }] });
})
app.post("/sixth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("playground", { level: 6, userName: userName, score: score, numbers: [2, 9, 5, 8, 6, 4, 7, 3], formPost: "seventh", options: [{ option: 29586474, value: 0 }, { option: 29586473, value: 1 }, { option: 29586479, value: 0 }, { option: 29586476, value: 0 }] });
})
app.post("/seventh", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("playground", { level: 7, userName: userName, score: score, numbers: [5, 2, 3, 9, 1, 8, 7, 4, 6], formPost: "end", options: [{ option: 523918746, value: 1 }, { option: 523918745, value: 0 }, { option: 523918749, value: 0 }, { option: 523918744, value: 0 }] });

})
app.post("/end", function (req, res) {
    res.render("end");
})

app.post("/reset", function (req, res) {
    userName = req.body.userName;

    res.render("main", { level: 1, userName: userName, score: 0, numbers: [3, 6, 5], formPost: "second", options: [{ option: 355, value: 0 }, { option: 368, value: 0 }, { option: 362, value: 0 }, { option: 365, value: 1 }] });

})
app.post("/exit", function (req, res) {
    userName = req.body.userName;

    res.render("end");

})
app.listen(3000, function () {
    console.log("Running");
})