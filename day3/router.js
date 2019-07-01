const express = require('express');
//引入路由器模块
const userRouter = require('./user.js')
var app = express();
app.listen(8080);
//使用路由器，把用户下所有路由挂载到/user下
//挂载：在url前自动添加/user
app.use('/user',userRouter);















