const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.listen(8080);

app.use( express.static('public') );
//将post请求的数据解析为对象
app.use( bodyParser.urlencoded({
   extended:false   //表示不适用第三方的qs模块而是使用核心模块querystring来解析查询字符串为对象
}) )

app.post('/mylogin',function(req,res){
  console.log(req.body);
  res.send('我不知道要干嘛');

})




