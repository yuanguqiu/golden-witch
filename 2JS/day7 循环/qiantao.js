/*打印*****
循环5次
for (var i=1,str='';i<6 ;i++ )
{ str+='*';
}
console.log(str);
//将上面代码放到另外的循环中 便可执行5次*/

for (var j=1;j<6 ;j++ )
{
  for (var i=1,str='';i<6 ;i++ )
{ str+='*';
}
console.log(str);
}