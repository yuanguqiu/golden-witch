var arr=[23,9,78,6,45];  
for (var i=1;i<arr.length ;i++ )
{  
	for (var j=0;j<arr.length-i; j++)   //内存循环，控制每轮比较次数
  {    	  if (arr[j]>arr[j+1])   //如果当前元素大于下一个元素，则位置交换
    {      var tem =arr[j];
           arr[j]=arr[j+1];
		   arr[j+1]=tem;
    }  
  }
}
console.log(arr);

/*
//数组元素排序 默认按照Unicode码从小到大
console.log(arr.sort());
console.log(arr.sort(function(a,b){
   return a-b;
 }));

 */