/* 9*9乘法表第三行
var num='';//原理：数字+ 字符串 ——》 字符串
for (var i=1; i<=3 ; i++)
{ num += i+'*3='+ i*3 +' ';
}
  console.log(num);
*/

var num = '';
for (var i=1; i<=5;i++ )
{ num += i +'*5=' + i*5 + '  ';
}
  console.log(num);