const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
console.log("MongoDb Connected"); 
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.get("/admin",(req,res)=>{
    res.sendFile(__dirname+"/views/admin.html");
})
app.post("/admin/projects",(req,res)=>{
    let project = req.body.project;
    let desc = req.body.description;
    let url = req.body.github;
    res.json({"name": project, "description": desc, "url": url});
})
app.use(express.static("public"));
const listener = app.listen(3000 , ()=>{console.log("your app is listening on PORT: ", listener.address().port)});