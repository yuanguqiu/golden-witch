var num = 56;
while(num)
{  var i = prompt('input a number');
   if (i == num)
   { alert('right');
     break;
   }else if (i>num)
   { alert('too big');
   }else if (i<num)
   { alert('too small');
   }else 
   {alert('cuowu');}
}