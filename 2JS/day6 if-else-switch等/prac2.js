/*
var score = 98;
if (score >=90)
{  console.log('优秀');
}else if (score >= 80) //false已经隐含了< 90 不用写&& score<90了
{  console.log('良好');
}else {
   console.log('不及格');
}
*/	

/*
var deposit = 1000000;
if (deposit <=100000)
{  console.log('普通客户');
}else if (deposit <=1000000)
{  console.log('优质客户');
}else if (deposit <=5000000)
{  console.log('黄金客户');
}else if (deposit > 5000000)
{  console.log('钻石客户');
}

*/
var code=2;
switch (code)
{
  case 1:    //执行code===1
    console.log('党员');
	break;
  case 2:
    console.log('团员');
	break;
  case 3:
	console.log('群众');
    break;
  default:
	console.log('非法字符');
}






