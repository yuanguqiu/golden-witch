var express = require('express');
var app = express();
app.listen(8080);

app.get('/admin/:uname/:password',function(req,res){
  //获取由路由传递的参数
  console.log(req.params)
  res.send('欢迎尊贵的用户：' + req.params.uname);
})



















