/*
function dam (a){
  for (var i=1,sum=0;i<=a ;i++ )
  { sum += i;
  }
  console.log(sum);
}

dam(8);
dam(10);
*/
/*
function rn(a,b){
  for (var i=a,sum =0;i<=b;i++ )
  { if ((i%4===0 && i%100!==0)||i%400===0)
    { sum += 1;
	  console.log(i,sum);
    }
  }
}
rn(2000,2100);
rn(1900,1996);
*/

/*
function com(n1,n2,n3){
 //  if (n1>=n2)
 // { return n1;
 // }else {return n2;}
  return (n1>n2? n1:n2)>n3?(n1>n2? n1:n2):n3;
}
var A=com(87,58,70);
console.log(A);
*/
/*
function judge(y){
  if ((y%4===0 && y%100!==0)||y%400===0)
  {return true;  //后面省略了else，因为return阻止了后面代码执行
  }
   return false;
}
 // console.log(judge(2020));
function ri(a){
 if (judge(a))
 { return 366;
 }return 365;
}
console.log(ri(2019));

*/
function jc(n){
  for(var i=1,num=1;i<=n;i++){
	num*=i;
}  
  return num;
}
/*jc(5);  //1~5 的乘积
console.log(jc(5));   //因为是内部的函数这里只能打印jc（5）而不是num*/
function qh(n){   //创建1~任何数的和，再将jc函数带入任何数
 for(var i=1,sum=0;i<=n;i++)
  { sum += jc(i);}
  return sum;
}
qh(10);
console.log(qh(10));


