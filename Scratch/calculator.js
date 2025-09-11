const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/add.html")
})

app.post("/", function(req, res){
    var add1 = Number(req.body.add1);
    var add2 = Number(req.body.add2);

    var result = add1 + add2;

    res.send( "The result is " + result);
})
app.get("/subtract", function(req, res){
    res.sendFile(__dirname + "/subtract.html")
})
app.post("/subtract", function(req, res){
    var sub1 = Number(req.body.sub1);
    var sub2 =  Number(req.body.sub2);

    var result = sub1 - sub2;
    res.send("The subtraction is " + result);
})
app.get("/divide", function(req, res){
    res.sendFile(__dirname + "/divide.html")
})

app.post("/divide", function(req, res){
   var div1= parseFloat(req.body.div1)
   var div2 = parseFloat(req.body.div2);

   function division(div1, div2){
    if (div2 ===0 || isNaN(div1)|| isNaN(div2)){
        return null;
    }else {
        return div1 / div2;
        
    }
   }
   var result = division(div1, div2)
   if (result === null){
    res.send("Error: Division by zero or invalid input")

   } else{
    res.send("The division result is " +  result);
   }
})
app.get("/multiply", function(req, res){
    res.sendFile(__dirname + "/multiply.html")
})
app.post("/multiply", function(req, res){
    var mult1 = Number(req.body.mult1);
    var mult2 = Number(req.body.mult2);

    var result = mult1 * mult2;
    res.send("Your multiplication is " + result);
})

app.listen(3000, function(){
    console.log("Server running on port 3000")
})