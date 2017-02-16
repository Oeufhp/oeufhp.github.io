var express=require('express');
var app=express();
var morgan=require('morgan');
var router=express.Router();
var port = process.env.PORT ? process.env.PORT : 7777;
var path=__dirname+'/public';
var ssl=__dirname+'/.well-known';

// router.use(function (req,res,next) {
//   console.log("/" + req.method);
//   next();
// });

// router.get("/",function(req,res){
//   res.sendFile(path + "index.html");
// });

// router.get("/resume",function(req,res){
//   res.sendFile(path + "resume/index.html");
// });
app.use(morgan('dev'));
app.use("/", express.static(path));
app.use('/.well-known',express.static(ssl));
app.get("/",function(req,res){
    res.sendFile(path+'/'+'index.html');
});
app.get("/.well-known",function(){

});

app.listen(port,function(){
  console.log("Your website is served at port "+ port);
});
