const fs = require('fs');
//文件流
//创建可读流
var readStream = fs.createReadStream('1.txt');
//设置流的编码为utf-8
readStream.setEncoding('utf8');
//获取数据流  
//事件：监听是否有数据流
readStream.on('data',function(chunk){
   console.log(chunk);
});
//监听：是否读取结束
readStream.on('end',function(){
   console.log('读取结束');
})


//2.使用可读流和可写流，拷贝文件
//2.1创建可读流
var readStream=fs.createReadStream('webstorm2017.rar');
//2.2创建可写流
var writeStream=fs.createWriteStream('1.rar');
//2.3把读取的流通过管道放入到写入流
readStream.pipe(writeStream);


