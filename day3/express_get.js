//引入express模块
//引入不一路径开头的目录模块
const express = require('express');
//创建Web服务器，把express当函数调用就行了
var app = express();
//监听端口8080
app.listen(8080);

app.get('/reg',function(req,res){
   res.send(`你是傻子吗<br>
	 这个东西好骚啊<br> 
     换行要用
     `);
   });
//响应文件
app.get('/study',function(req,res){  
   res.sendFile(__dirname +'/tmooc.html');
   });
app.get('/index',function(req,res){
   //跳转到http://...
   res.redirect('http://www.tmooc.cn/')
})
















































