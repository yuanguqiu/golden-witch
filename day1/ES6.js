/* //块级作用域
console.log(b);
var b=2;
{
  let num = 1;

}
   console.log(num);

{let num = 0;
  for (let i =1;i<101 ;i++ )
  {  num += i;
  }  console.log(num);

}

 //参数默认值，函数增强
(function (a,b,c=0){
   console.log(a+b+c);

})(20,5) 
var a='haha',b=2330,c='你是猪吗';
 console.log(`你好骚啊${a}${b+3}`);
*/
var num =3;
num > 5 && console.log(a);

