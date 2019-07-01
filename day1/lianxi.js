/*
console.time('0');
for (var i=1 ,sum = 0;i<1000000 ; i++)
{  sum +=i;
} console.timeEnd('0');
console.info(sum);

console.time('1');
var sum2 =0,i=1;
while (i<1000000)
{  sum2+=i
	i++;
}
console.info(sum2);
console.timeEnd('1');



{console.time('2');
var sum1=0,i=1;
do
{  sum1+=i
	i++;
}
while (i<1000000);
console.info(sum1);
console.timeEnd('2');}
*/

var a = Buffer.alloc(12,'你好骚啊');
console.log(a.toString());







