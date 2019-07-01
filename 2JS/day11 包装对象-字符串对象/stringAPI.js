/*//var a = '汉堡包';
//console.log(a.length); //获取字符长度 1汉字=1字符
var str = 'jadh7aw5idsa2knfj';
console.log(str.toUpperCase());

//声明变脸个保存身份证号，截取出生年月日性别，打印
var id='110203198012250110';
var year=id.substr(6,4);
var month=id.substr(10,2);
var day=id.substr(12,2);
var sex = '男';
 if (id.substr(-2,1)%2===0)
 {  sex = '女';
 };

console.log('这个沙雕的生日为'+year+'年'+month+'月'+day+'日'+' 性别'+sex);
*/
/*
var word = 'wdNMDHhh';
var word1 = word.substr(0,1).toUpperCase();
var word2 = word.substr(1).toLowerCase();
console.log(word1+word2); 

var nn = 'ak@nfjaf';
//var nn =[23,15,76,88,48];
console.log(nn.split(''));
console.log(nn[2],typeof nn[2]);

*/

var str = 'hOw ARE yOU';
var arr = str.split(' ');
console.log(arr);
for (var i=0;i<arr.length ; i++)
{   var first = arr[i].substr(0,1).toUpperCase(); //arr[i]可看做是一个小字符串
    var other = arr[i].substr(1).toLowerCase();
     arr[i]=first + other;  
}          
console.log(c=arr.join(' '));  






















