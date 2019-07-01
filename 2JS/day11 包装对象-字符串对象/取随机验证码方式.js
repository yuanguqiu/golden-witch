var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var arr = str.split('');  //console.log(arr);
var vericode = [];    
for (i=1;i< 5;i++ )
{  var num = Math.floor(Math.random() *str.length ) //若有30个元素，需要下标0~29，则让0~1×30，得到0~30范围，（左闭右开区间）向下取整，即为0~29
    vericode.push( arr[num] )

} console.log(vericode);






















