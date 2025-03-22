const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.use(express.static("public"));
const listener = app.listen(3000 , ()=>{console.log("your app is listening on PORT: ", listener.address().port)});