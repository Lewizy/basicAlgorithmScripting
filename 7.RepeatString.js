function repeatStringNumTimes(str, num) {
 let result = "";
  
  while(num > 0){
    
    result += str;
    num = num -1;  /*  or num--;  */
  }
  return result;
}

repeatStringNumTimes("abc", 3);

//

function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}

//

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
