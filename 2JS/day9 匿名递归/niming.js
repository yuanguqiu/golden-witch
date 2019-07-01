
//避免全局污染，把变量放到函数作用下
//匿名函数自调用：用括号
var a = 5,b=4;
(function(a,b){
  
  console.log(a,b);
})();

function fn(a){
   //实参赋值给形参
   //把匿名函数赋值给a，a就是函数名称
   //a=function( ){  }
   //调用函数a执行传递中的代码
 a();
}
fn((function (){
   console.log(55);
   }  ));








