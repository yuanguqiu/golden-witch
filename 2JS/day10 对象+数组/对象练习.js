var person1={   //
  name:'小明',
  age:19
};
var person2=person1;  //person1 赋予了person2
person1.name = '小可';
person2.age = 26;
console.log(person1);
console.log(person2);

//手动释放（销毁）引用类型
person1=null;