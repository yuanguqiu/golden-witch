//引入express模块
//引入不一路径开头的目录模块
const express = require('express');
//创建Web服务器，把express当函数调用就行了
var app = express();
//监听端口8080
app.listen(8080);

//验证是否为空
//参数1：要拦截的url（给谁用）
//参数2，回调函数
app.use('/reg',function(req,res,next){
  console.log('验证是否为空');
  //如果为空，响应一句话
  res.send('用户名不能为空')
  //执行下一个中间件或路由  next是一个函数
  next();

});

app.use('/reg',function(req,res,next){
  console.log('用户名是否可用');
  res.send('用户名不可用')
  next();
});


app.get('/reg',function(req,res){
  res.send('成功');

})

