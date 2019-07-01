/*//创建数组，包含多个员工姓名
//数组字面量
var emps = ['tom','jerry','tyler'];  //一个变量能存储多个员工姓名(元素)
console.log(emps);
*/
/*
var cities = ['武汉','黄石','十堰','荆州'];//0.1.2.3
var commodities = ['苹果','西瓜','提子','菠萝'];
cities[2]='恩施';
cities[4]='仙桃';
for (var bt in cities){
   console.log(bt,cities[bt]);  
}

*/

/*
//内置构造函数
var laptop=new Array('ThinkPad','Mi','Dell');
var conrse =new Array();
console.log(laptop,conrse)

var books=new Array('hao','sf','fw','w','f');
var status=new Array(5);
var haha=new Array();
console.log(books,status,haha);   */

/*
var country = [];
country[country.length]='中国';
country[country.length]='日本';
*/
/*
var sum=0 ;
var grade = [96,77,82,54,79,86,98];
for (var ky in grade )
 {   
     sum += grade[ ky ];
 };
console.log(sum);

*/  /*
var sum=0;
var grade = [96,77,82,54,79,86,98];
for (var i=0; i< grade.length;i++ )
{  sum+= grade[i];
}
console.log(sum);
*/  /*
var country = ['中','日','美','韩','英'];
  for (var i=0;i<country.length ;i++ )
  {  if ( country[i] ==='中' )
    {  country[i] = 'china';
    }  
  }
console.log(country);
*/  /*
//创建数组，包含多个数字，获取数组中最大值
var hh=[84,75,35,99,45];
//准备遍历，用于保存最大值，默认把第一个元素放进去
var max = hh[0];  //从第二个开始遍历
for (var i=1; i<hh.length ; i++)
{  	if (hh[i]>max)
  {  max = hh[i];
  }  
}
console.log(max);  */
var sum =0;
function getAvg(a){
  for (var i=0; i<a.length;i++ )
  {  sum += a[i];
  }
 // return sum/a.length;
}
getAvg([27,39,15,54]);
console.log(sum);










