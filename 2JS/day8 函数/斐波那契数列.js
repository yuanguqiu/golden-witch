function  fib(n){
  var n1=1,n2=1;
  for (var i=3;i<=n ;i++ )
  { var c = n1;
       n1 = n2;   //没挪动一次上一次的N2作为这一次的N1
	   n2 = c+n2;
	              //fib(n)=fib(n-1) + fib(n-2);
  }  console.log(n2);  //最后的n2就是当前n的值
}
fib(10);