const express = require("express");
const app = express();
const path = require("path");
const bodyParser= require("body-parser")
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
const ejsMate = require("ejs-mate");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/utkal",(req,res)=>{
  let username = req.body.username;
  res.render("mainpage.ejs",{username})
})
app.listen(8080, (req, res) => {
  console.log("server is at port 8080 ");
});
