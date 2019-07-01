const express = require('express');
var app = express();
app.listen(8080);
//引入mysql模块
const mysql = require('mysql');
//建立连接对象
var connection = mysql.createConnection({
   host:'127.0.0.1',
   port:'3306',
   user:'root',
   password:'',
   database:'tedu'
})
//创立连接
connection.connect();

//托管静态文件到public
app.use( express.static('public') );
//路由
app.get('/add',function(req,res){
  var obj =req.query;
  console.log(obj);
//可直接插入一个对象
  connection.query('INSERT INTO dept SET ?',[obj],function(err,result){
   if(err) throw err;
   console.log(result);
//如果插入成功，响应注册成功
     if (result.affectedRows>0)
     {  res.send('你的喜悦我鲸某人收到了');
     }
})
   
});







