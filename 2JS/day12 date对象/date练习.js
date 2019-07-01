/*
var arr=[23,9,78,6,45];  
for (var i=1;i<arr.length ;i++ )
{  	for (var j=0;j<arr.length-i; j++)   //内存循环，控制每轮比较次数
  {  if (arr[j]>arr[j+1] )   //如果当前元素大于下一个元素，则位置交换
    {  var tem =arr[j];
        arr[j]=arr[j+1];
		  arr[j+1]=tem;
    }  
  }
}       console.log(arr);


//创建date对象，保存员工的入职时间‘2019/6/19’，三年后合同到期，计算到期时间，合同到期前1个月续签合同，如果是周末提前到周5，计算续签时间，打印出3个时间的本地日期字符串格式
var d1= new Date('2019/6/22');
var d2 = new Date(d1);
d2.setFullYear(d2.getFullYear() + 3);
var d3 = new Date(d2);
d3.setMonth(d3.getMonth()-1);
if (d3.getDay()==6)
{  d3.setDate(d3.getDate()-1);
}else if (d3.getDay()==0)
{  d3.setDate(d3.getDate()-2);
}

console.log('入职时间'+ d1.toLocaleDateString());
console.log('到期时间'+ d2.toLocaleDateString());
console.log('续签时间'+ d3.toLocaleDateString());
*/

var a = new Number(666);
console.log(a.toFixed(2));


























