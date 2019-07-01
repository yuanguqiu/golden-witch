//引入MySQL模块
const mysql = require('mysql');
//创建连接对象
var connection = mysql.createConnection({  //传一个对象
   host:'127.0.0.1',
   port:'3306',
   user:'root',
   password:'',
   database:'tedu'  //连接后使用的数据库
});
//建立连接
connection.connect();
//执行SQL语句
/*
connection.query('UPDATE emp SET sex =1,salary = 5000 WHERE eid=10',function(err,result){
   //err 可能产生的错误   resultSQL语句的结果
   if(err) throw err;
   console.log(result);
})

connection.query( `INSERT INTO emp VALUES(NULL,'SYR',0,'1996-10-14',10000,20)`,function(err,result){
   if(err) throw err;
   console.log(result);
} )

connection.query('SELECT * FROM emp',function(err,result){
   if(err) throw err;
   console.log(result);
})

connection.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',[null,'ZSY',1,'1998-5-22',8000,10],function(err,result){
  if(err) throw err;
   console.log(result);
})
*/
//直接将对象插入数据库
var emp ={
  ename:'zhang',
  sex:0,
  salary:5000,
  birthday:'1982-07-09'
}
connection.query('INSERT INTO emp SET ?',[emp],function(err,result){
  if(err) throw err,
  console.log(result);
})

//关闭连接
connection.end()


