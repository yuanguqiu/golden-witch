const express = require('express');
//创建路由器对象
var router = express.Router()
//引入三方中间件
const bodyParser = require('body-parser');
//引入连接池模块
const pool = require('../pool.js')

//1.注册路由1  注册界面   可参考md5加密规则
router.post('/reg',function(req,res){

  var obj = req.body;
  console.log(obj);

 //如果用户名为空
  if (!obj.uname){
  res.send({code:401,message:'uname required'});
  //结束函数执行
  return;}
 
  if(!obj.upwd){
  res.send({code:402,message:'upwd required'});
  return;}
  if(!obj.phone){
  res.send({code:403,message:'phone required'});
  return;}
  if (!obj.email){
  res.send({code:404,message:'email required'});
  return;}

 //验证通过后执行sql语句插入
 pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
   if(err) throw err;
   console.log(result);
   //如果插入成功
 if (result.affectedRows>0)
   {  res.send( {code:200,msg:'reg suc'} )
   }
 })
});

//2.注册路由2 登录界面
//2.1获取数据
router.post('/login',function(req,res){
  var obj = req.body;
  console.log(obj);
 //2.2验证
 if(!obj.uname)
   {res.send('用户是个空的嘞');
   return;
   }
  if(!obj.upwd)
   {res.send('密码是个空的嘞');
   return;
   }
 //执行SQL  查询是否同时有用户名和密码,如果没有则会返回空数组
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
  if(err) throw err;
 //判断登陆成功还是失败
    if(result.length>0){  //有元素则成功，select返回的是数组
    res.send({code:200,msg:'login suc'});
	}else{
	res.send({code:201,msg:'uname or upwd error'});
	};
  })
});

//注册路由3  查询详情
router.get('/detail',function(req,res){
  var obj = req.query;
  if (!obj.uid)   //验证是否为空
   { res.send({code:401,msg:'请输入一个id'});
     return;
   };
  pool.query('SELECT * FROM xz_user WHERE uid = ?',[obj.uid],function(err,result){
     if(err) throw err;
     /*if (result.length < 1)  //据说不需要判断
     { res.send({code:401,msg:'您查找的人不存在'});
       return;
	 };*/
	 res.send(result);
  });
});

//注册路由4  修改信息 4.1获取数据
router.post('/update',function(req,res){
  var obj = req.body;
  console.log(obj);
 //4.2批量验证数据是否为空  遍历对象
  var i = 1;   //让每个属性对应401-405
  for (var key in obj){
	i++;
    if (!obj[key])
    {  res.send({ code:i,msg:key+'is necessary'});
       return;
	};
  };

 //4.3执行SQL语句
 //取出用户编号uid项（因为编号是默认的查找条件，不准修改）
   var uid = obj.uid;
 //4.4删除对象中的编号属性
   delete obj.uid;
   console.log(obj);

 pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,uid],function(err,result){
 if(err) throw err;
 console.log(result);

  if (result.affectedRows>0){
	  res.send({code:200,msg:'修改成功'})
  }else{ res.send({code:201,msg:'修改失败'});
  };
 });
});

//注册路由5  查看页面
router.get('/list',function(req,res){
   var obj = req.query;
   var count = obj.count;
   var pno = obj.pno;
   if (!obj.count)
   {  count = 2;
   };
   if (!obj.pno)
   {  pno = 1;
   };
 //因为得到的都是字符串，转 整型
  count = parseInt(count);
  pno = parseInt(pno);
 //计算开始
 var start = (pno-1)*count;
 //开始执行SQL语句
 pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,count],function(err,result){
  if(err) throw err;
  res.send(result);
  });
});

//注册路由6  删除信息
router.get('/delete',function(req,res){
  var obj = req.query;
  //var num = parseInt(obj.uid);
  if (!obj.uid)
   { res.send({code:401,msg:'你倒是输入一个数啊'});
     return;
   }
  pool.query('DELETE FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
    if(err) throw err;
	console.log(result);
	
	if (result.affectedRows>0)
	{ res.send({code:666,msg:'你已杀掉此条数据'});
	}else{
	  res.send({code:999,msg:'此数据不存在'});
	}	
  });
});


//导出路由器对象
module.exports=router;









