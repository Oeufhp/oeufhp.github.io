var express=require('express');
var app=express();
var morgan=require('morgan');
var router=express.Router();
var port = process.env.PORT ? process.env.PORT : 7777;
var path=__dirname+'/public';
var ssl=__dirname+'/.well-known';

app.use(morgan('dev'));
app.use("/", express.static(path));
app.use('/.well-known',express.static(ssl));
app.use("/resume",express.static(path+'/resume'));
app.listen(port,function(){
  console.log("Your website is served at port "+ port);
});
