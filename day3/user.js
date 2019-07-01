//用户路由器，是express下功能
//用户下所有路由都放在这里
const express = require('express');
//创建路由器对象
var router = express.Router();
//向路由器中添加路由
router.get('/list',function(req,res){
  res.send('用户路由器')
});
//路由器最终要交给Web服务器使用，导出路由器对象
module.exports = router;














