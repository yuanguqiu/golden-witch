var pri = prompt('input money'),num = prompt ('input quantity');
var total = pri*num;
/*pri = Number(pri);
num = Number(num);   隐式转换*/
if (total>=1000)
{ total*=0.9;
  console.log(total);
}
var balance = 800;//余额
if (balance>=total)
{alert('pay successful');
}else{alert('pay error');
}