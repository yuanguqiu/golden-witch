const fs = require('fs')
/*
//创建目录
fs.mkdir('mydir',function(err){
   if(err) throw err + '略略略'
})

var dat = fs.mkdirSync('mydis')
*/
/*
fs.readdir('mkdir',function(err,result){  //result读取的文件列表，格式为数组
  if(err) throw err;
  console.log(result);
})
*/

/*
fs.writeFile('1.txt','吔屎啦你',function(err){
  if(err) throw err;
  console.log('文件创建成功');
})
*/

/*
//创建数组，每个元素是一个课程名称，遍历数组，分别获取元素，将数据使用同步方法写入data.txt
var kecheng = ['语文','数学','英语','理综'];
for(var key in kecheng){
   fs.appendFileSync('data.txt',kecheng[key] + '\n');
}


fs.readFile('data.txt',function(err,data){
   if (err) throw err;
   console.log(data.toString());   //读取处理的结果是buffer形式
})  
  
*/
fs.rmdirSync('mkdir');































