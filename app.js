const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.set('view engine','ejs');
var day="";
app.get("/",(req,res)=>{
   var today=new Date();
   if(today.getDay()===6 ||today.getDay===0){
       day="Weekend";
   }
   else{
      day="Weekday";
   }
res.render('index',{KindOfDay:day});
})

app.listen(2000,(req,res)=>{
    console.log("Server has started at port 2000 ++ ");
    
})