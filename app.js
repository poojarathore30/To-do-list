const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
var day="";
var item=["Buy Food","Eat Food"];
let workItems=[];
app.get("/",(req,res)=>{
   day=date.getdate();
res.render('index',{ListTitle:day,newitem:item});
});


app.post('/',(req,res)=>{
    var task=req.body.NewItem;
    
    if(req.body.button==="work"){
        workItems.push(task);
        res.redirect('/work');
    }
    else{
        item.push(task);
        res.redirect('/');
    }
  
});
app.get('/work',(req,res)=>{
    res.render('index',{ListTitle:"work",newitem:workItems});
    });
app.listen(2000,(req,res)=>{
    console.log("Server has started at port 2000 ++ ");
});