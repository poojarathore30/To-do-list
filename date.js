module.exports.getdate=function(){
    var today=new Date();
   var options={
   weekday:"long",
   year:"numeric",
   month:"long",
   day:"numeric"
   }
return today.toLocaleDateString('en-US',options);
}
module.exports.getday=function (){
    var today=new Date();
   var options={
   weekday:"long",
   
   }
return today.toLocaleDateString('en-US',options);
}