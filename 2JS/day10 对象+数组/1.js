/*var person={
  name:'张三',  //成员属性
  sex:'女',
  say:function(){   //成员方法
      console.log('hai~，我是'+this.name);
      }
}
person.say();   //调用对象中的方法
*/
var yuan={
  r:5,
  pai:3.14,
  c: function(){
    return this.r *this.r*this.pai  //结果要return出来
    },
  l: function(){
    return this.r *2*this.pai
	}
}
yuan.c();  //注意括号！
yuan.l();
console.log(yuan.c());
console.log( yuan.l());

