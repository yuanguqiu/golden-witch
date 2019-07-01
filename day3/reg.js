const express = require('express');
var app = express();
app.listen(8080);

app.get('/reg',function(req,res){
  res.sendFile(__dirname+'/reg.html');
  });
app.get('/myreg',function(req,res){
  //get请求传递的数据是查询字符串
  var num = req.query;
  console.log(num)
  res.send('注册成功，您的手机号为：'+num.phone)
});






