function  emm(str){
  var a = true;
 for (i=0;i<str.length; i++)
 {  if (str.length%2==0)
    { console.log('uncorrect');
      a = false;
      break;
    } 
	else if(str[i]===str[str.length-i-1])
   {  continue;
   }else{
      console.log('uncorrect');
	  a=false;
      break;
	}    
 }  
 if (a)
 {console.log('correct');
 }
}
emm('abcdcba');






