
const express=require("express");
const bodyParser=require("body-parser")
const app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
    var nm1=Number(req.body.num1);
    var nm2=Number(req.body.num2);
    var result=nm1+nm2;
    res.send("The calculation of this ="+result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/BMI-calculator.html");
});

app.post("/bmicalculator",function(req,res){
    var w=Number(req.body.weight);
    var h=Number(req.body.height);
    var n=w/(h*h);
    res.send("The BMI is ="+ n);
});

app.get("/avgMark",function(req,res){
    res.sendFile(__dirname+"/avg-mark.html");
});

app.post("/avgMark",function(req,res){
    var ma1=Number(req.body.m1);
    var ma2=Number(req.body.m2);
    var ma3=Number(req.body.m3);

    var avg=(ma1+ma2+ma3)/3;

    res.send("The avg mark is "+avg);
});


app.listen(3000,function(){
    console.log("started server at port 3000");
})