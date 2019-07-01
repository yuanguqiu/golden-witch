/*
function dg(n){
   if (n==1)
   { return 1;
   }
   
   return n+dg(n-1);   //要返回目前综合值，即n
}
dg(10);
console.log(dg(10));
*/
var fn1=function(a,b){
  for (var i=a,sum=0;i<=b ; i++)
  { sum+=i;
  }
 return sum;
}

console.log(fn1(5,7));




