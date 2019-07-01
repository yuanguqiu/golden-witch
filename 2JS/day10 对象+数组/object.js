/*
//使用 对象字面 量 创建对象
// 添加属性 用':'赋值
var employee={id:2333,
          name:'lily',
	      salary:3000,
	      birthday:'1997-10-4',
	     'come-from':'China'}  //属性名有特殊字符要加引号
//访问对象中的属性birthday 2种方式
 console.log(employee.birthday);
 console.log(employee['come-from']);
 employee.num=15000;  //添加不存在的属性
 console.log(employee); 
*/

/*
var book={
		id:113,
		title:'海猫鸣泣之时',
		author:'龙骑士07',
		price:38
}
book.price = 88;  //修改
book.publish='非洲农民出版社';  //添加不存在属性
console.log(book);
*/

/*
//使用内置构造函数创建对象
var car = new Object();
//添加属性
car.brand='五菱荣光';

console.log(car['price']);
*/

/*
var Notebook =new Object()
Notebook.Id = 1024;
Notebook.price = 3000;
console.log(Notebook);
*/

/*
var book={
		id:113,
		title:'海猫鸣泣之时',
		author:'龙骑士07',
		price:38
}
for(var dt in book){  //dt代替上面所有属性名
  console.log(dt,book[dt]);
}
*/

var score={
      chi:94,
	  math:98,
	  eng:88,
      mus:96
}
var sum = 0;
for(var test in score){
	sum += score[test];
	console.log(test,score[test],sum);
}
	console.log(sum);




