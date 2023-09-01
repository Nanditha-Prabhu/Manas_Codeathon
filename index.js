const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("main", { level: 1, userName: "Satwik Kamath", score: 0, numbers: [3, 6, 5], formPost: "second", options: [{ option: 355, value: 0 }, { option: 368, value: 0 }, { option: 362, value: 0 }, { option: 365, value: 1 }] });
})

app.post("/second", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;


    res.render("main", { level: 2, userName: userName, score: score, numbers: [4, 6, 2, 9], formPost: "third", options: [{ option: 4620, value: 0 }, { option: 4629, value: 1 }, { option: 4649, value: 0 }, { option: 4639, value: 0 }] });
})
app.post("/third", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("main", { level: 3, userName: userName, score: score, numbers: [1, 8, 5, 2, 6], formPost: "fourth", options: [{ option: 18526, value: 1 }, { option: 18525, value: 0 }, { option: 18662, value: 0 }, { option: 18523, value: 0 }] });

})
app.post("/fourth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("main", { level: 4, userName: userName, score: score, numbers: [2, 4, 7, 3, 9, 2], formPost: "fifth", options: [{ option: 247492, value: 1 }, { option: 247392, value: 0 }, { option: 247385, value: 0 }, { option: 247393, value: 0 }] });
})
app.post("/fifth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("main", { level: 5, userName: userName, score: score, numbers: [2, 7, 5, 3, 9, 6, 7], formPost: "sixth", options: [{ option: 2753969, value: 0 }, { option: 2753968, value: 0 }, { option: 2753967, value: 1 }, { option: 2753963, value: 0 }] });
})
app.post("/sixth", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("main", { level: 6, userName: userName, score: score, numbers: [2, 9, 5, 8, 6, 4, 7, 3], formPost: "seventh", options: [{ option: 29586474, value: 0 }, { option: 29586473, value: 1 }, { option: 29586479, value: 0 }, { option: 29586476, value: 0 }] });
})
app.post("/seventh", function (req, res) {
    userName = req.body.userName;
    ans = req.body.ans;
    score = req.body.score;

    if (ans == "1")
        score++;
    res.render("main", { level: 7, userName: userName, score: score, numbers: [5, 2, 3, 9, 1, 8, 7, 4, 6], formPost: "end", options: [{ option: 523918746, value: 1 }, { option: 523918745, value: 0 }, { option: 523918749, value: 0 }, { option: 523918744, value: 0 }] });

})
app.post("/end",function(req,res){
    res.render("end");
})
app.listen(3000, function () {
    console.log("Running");
})