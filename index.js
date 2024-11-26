 const express = require("express");

 const myapp = express();

 myapp.get("/",(req,res)=>{
    //root/index/home/landing route
    res.render("index.js")
});
myapp.get("/doctors",(req,send)=>{
    res.render("doctors.ejs");
});
///about,record,dashboard

myapp.listen(4004,()=>console.log("App started and running on port 4004"));
