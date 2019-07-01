const express = require('express');
const querystring = require('querystring');
var app = express();
app.listen(8080);
app.get('/login',function(req,res){
   res.sendFile(__dirname + '/login.html');
});
//根据提交按钮的请求，创建对应的路由
//post  /mylogin   响应登陆成功   现阶段post只能通过提交按钮实现
app.post('/mylogin',function(req,res){
  //获取post请求数据
  //事件
  req.on('data',function(mydata){  //mydata可改名
     //console.log(mydata.toString());得到的是一个查询字符串 buffer形态
  //把查询字符串转为对象，引入模块
  var obj =querystring.parse(mydata.toString());
  console.log(obj)
  });
  res.send('登陆成功');
});





