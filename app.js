const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


const app = express();

var items = ["Buy food", "Make food", "Eat food"];
var workList = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

let day = date.getDate();

  res.render('list', {
    listTitle: day,
    newAddedItem: items
  });

});


app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work Lists",
    newAddedItem: workList
  });

});

app.post("/", function(req, res) {
  var item = req.body.newItem;

  if(req.body.list === "Work"){
   workList.push(item);
   res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

});


// work route webpage: already done above.

// app.get("/work", function(req, res) {
//   res.render("list", {
//     listTitle: "Work Lists",
//     newAddedItem: workList
//   });
//
// });

// app.post("/work", function(req, res) {
//
//   var item = req.body.newItem;
//   workList.push(item);
//   res.redirect("/work");
// });

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("running");
});
