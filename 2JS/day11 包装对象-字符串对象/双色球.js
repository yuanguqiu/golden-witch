//双色球红球1~33 随机取6个，蓝球1~16 随机取1
var hong = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
var ssqh = []; 
var ssql = [];
 for (i=1; i<7;i++ )
 {  var num = Math.floor(Math.random() * hong.length);            //0-32  0-33向下取整
      ssqh.push(hong[num]);
	  hong.splice(num,1);
 }
//console.log(ssqh);    
var lan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var num1 = Math.floor(Math.random() * lan.length);
	  ssql.push(lan[num1]);
//console.log(ssql);
var ssq = ssqh.concat(ssql);
console.log(ssq);


















