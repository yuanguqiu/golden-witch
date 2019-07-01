//引入fs模块
const fs=require('fs');
//查看文件的状态
//参数1：路径
//参数2：回调函数，获取结果，不通过保存至变量了
fs.stat('global.js',function(err,stats){
    if (err) throw err;
	console.log(stats);//err：可能产生的错的 stats：具体的结果    
});
  































