/*//引入http模块
const http = require('http');
//向web服务器发送请求
http.get('http://www.tmooc.cn',function(res){  //1.请求URL  2.获取响应  res:响应的对象
   console.log(res.statusCode);   //响应的状态码
//获取响应的内容
  res.on('data',function(chunk){
      console.log(chunk.toString());
  }) //事件：监听是否有数据流响应

});   
*/

//引入模块
const http = require('http');
//创建web服务器
var app = http.createServer();  
// http://127.0.0.1:8080
//设置监听的端口号
app.listen(8080);
//接受请求，根据请求作出响应
app.on('request',function(req,res){  
	//req：请求的对象，获取所有请求
    //请求的URL 请求的方法
   console.log(req.url,req.method);
    //请求的头信息
   console.log(req.hearders);
    //res：响应的对象，作出具体响应
	//设置响应内容
   //res.write('this is homepage');

   //设置响应的头信息和状态码，跳转
   res.writeHead(302,{   //后面的参数是对象
     Location:'http://www.tmooc.cn'
   });
   //结束并发送响应内容到浏览器
   res.end()
});   //一旦有请求，自动触发事件 服务器响应反映在回调函数中

//PS：每次更改内容要重启服务器
















