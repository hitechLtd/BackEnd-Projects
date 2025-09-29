
const express = require("express")
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello,server</h1>")
})
app.get("/contact", function(req,res){
    res.send("contact me at: brightchimwa12@gmail.com")
})
app.get("/about", function(req, res){
    res.send("my name is hiflex and am the most hated in the class and I do not know why ")
})
app.get("/hobbies", function(req, res){
    res.send("hobbies section")
})
app.listen(3000, function(){
    console.log("Server started on port 3000")
});
