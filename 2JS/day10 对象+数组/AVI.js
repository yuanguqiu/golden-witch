/*
var arr=['tom','king','smith'];
//把数组转为字符串
//console.log( arr.toString() );  //toString() 就是一个API  将数组中元素按逗号组合成字符串
console.log( arr.join('-') );    //将数组转换为字符串的同时可改变分隔符 ，默认为','分隔

var arr=['html','css','js','nodejs','ajax','vue','react'];
console.log( arr.slice(0,3) );//开始截取的下标 到 结束的下标数（但不包含后面下标对应的元素，所以要+1）
console.log( arr.slice(-3,-1) ) ; //截取倒数第二个，不包含倒数第一个，所以是vue
console.log( arr.slice(-3) );  //从第一个下标截取到最后
*/
var arr = ['a','b','c','d','e','f','g'];
/*var a = arr.slice(2,4);
var b = arr.slice(-2,-1);
var c =arr.slice(1,2);
console.log(a,b,c,arr.concat(b,c));*/
console.log(arr.splice(4,2));
console.log(arr.splice(2,0,'z'));
console.log(arr)






























