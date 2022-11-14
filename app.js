const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

var inputs = ["Buy Food", "Cook Food", "Eat Food"];

var chores = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function (req, res){
    var year = date.getYear();
    var day = date.getDate();
    
    res.render("list", {kindOfDay: day, newToDoLists: inputs, copyRight: year});
    
});

app.post("/", function (req, res) {
    var  input = req.body.todolist;
    console.log(req.body)
    if (req.body.button === "Work List"){
        chores.push(input);
        res.redirect("/work")
    } else {
        inputs.push(input);
        res.redirect("/")
    }
    
});

app.get("/work", function (req, res){
    var year = date.getYear();
    res.render("list", {kindOfDay: "Work List", newToDoLists: chores, copyRight: year});
})

// app.post("/work", function (req, res){
//     var input = req.body.todolist;
// });

app.get("/about", function (req, res){
    var year = date.getYear();
    res.render("about", {copyRight: year})
})

app.listen(3000, function (){
    console.log("Server started at port 3000");
});


// var currentDay = today.getDay();
//     // var day = "";

//     switch (currentDay) {
//         case 0:
//             res.render("list", {kindOfDay : "Sunday"});
//             break;
//         case 1:
//             res.render("list", {kindOfDay : "Monday"});
//             break;
//         case 2:
//             res.render("list", {kindOfDay : "Tuesday"});
//             break;
//         case 3:
//             res.render("list", {kindOfDay : "Wednesday"});
//             break;
//         case 4:
//             res.render("list", {kindOfDay : "Thursday"});
//             break;
//         case 5:
//             res.render("list", {kindOfDay : "Friday"});
//             break;
//         case 6:
//             res.render("list", {kindOfDay : "Saturday"});
//             break;
    
//         default:
//             console.log("Error; current day is equal to " + currentDay)
//     }

    // if (currentDay === 6 || currentDay === 0){
    //     day = "Weekend";
        
    // } else {
    //     day = "Weekday";
        
    // }
    