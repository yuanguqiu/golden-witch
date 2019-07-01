const express=require('express');
var app = express();
app.listen(8080);

//把所有静态资源（文件端HTML，CSS，js等）托管到public目录下
//当浏览器请求静态资源，会自动到public目录下寻找，不需要再创建路由响应文件
app.use( express.static('public') );
app.use( express.static('picture') );






