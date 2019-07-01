function  lifang(n){
  var a = n*n*n;
 return a; 
}
//lifang(2);
//console.log(lifang(2));

for (var i=100,sum=0;i<=999 ;i++)
{  var num1 = parseInt(i/100);  //隐式转换
   var num2 = parseInt((i-num1*100)/10);
   var num3 = parseInt(i-num1*100-num2*10);
	sum = lifang(num1)+lifang(num2)+lifang(num3)
	if (sum==i)
{  console.log(i);
}
}
