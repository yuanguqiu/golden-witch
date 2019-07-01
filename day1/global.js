//一次性定时器
//开启
var timer1 = global.setTimeout(()=>{console.log('boom!');},1000);
var timer2 = global.setInterval(()=>{console.log('baam!');},1000);
var timer = setImmediate(()=>{console.log('bom!');});