var express= require("express");
var bodyParser= require("body-parser");
var app= express();
var items=["Buy Food","Cook Food","Eat Food"];
let workitems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/",function(req,res){
  var today= new Date();


  var options={
    weekday:'long',
    year:'numeric',
    month:'long'
  };

var currentday=today.toLocaleDateString("en-US",options);
    res.render("list",{
    listTitle:currentday,
      newListitems:items
    });
})
app.post("/",function(req,res){
  var item=req.body.usertext;
  items.push(item);
  res.redirect("/");
})
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",
  newListitems:workitems
});
})
app.post("/work",function(req,res){
  var item=req.body.usertext;
  workitems.push(item);
  res.redirect("/work");
})
app.get("/about",function(req,res){
  res.render("about");
})
app.listen(3000,function(){
  console.log("Server is running at prt 3000");
})
