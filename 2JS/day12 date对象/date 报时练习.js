var d = new Date()
var year = d.getFullYear();
var month = d.getMonth()+1;
var date = d.getDate();
var arr = ['日','一','二','三','四','五','六']
var day = arr[d.getDay()];
var hour = d.getHours();
var minute = d.getMinutes();

console.log('今天是'+year+'年'+month+'月'+date+'日  星期'+day+'  '+hour+':'+minute);



























