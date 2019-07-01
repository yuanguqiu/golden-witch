
//引入查询字符串模块
const querystring =require('querystring');
//查询字符串
  var str = 'keyword=手机&enc=utf8';
//把查询字符串str解析为对象
var ob = querystring.parse(str);
  console.log(ob);    //{ keyword: '手机', enc: 'utf8' }
//把对象格式化为查询字符串
console.log(querystring.stringify(ob)); //keyword=%E6%89%8B%E6%9C%BA&enc=utf8






























