/* 1.
for (var i=2000,num=0;i<=2100 ;i++)
{ if (((i%4===0 && i%100!==0)||i%400===0) && num<10)
 {
  num+=1;
  console.log(i,num);
 }
}
*/
/* 2.
for (var i=1,sum=0;i<101 ;i++ )
{ sum+=i;
	if (sum >=4000)
	{break;
	}
}console.log(sum);
*/
/* 3.
for (var i=1,x=1;i<=99 ;i++ )
{ x*=i;
}console.log(x);
*/


 
/* 4.
for (var y=1;y<=9 ;y++ )
{ for (var x=1,num='';x<=y ;x++ )
 { num += x+'*'+y+'='+x*y+' '
 }console.log(num);
}
*/


for (var a=2,b=0;a<=100;a++ )
{ for (var i=2;i<a ;i++ )
 {  if ( a%i==0)
  {break;}
 }
 



}
 