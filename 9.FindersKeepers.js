//my code 
function findElement(arr, func) {
  let num = 0;
  let mod = Math.min(...arr.filter(func));
    
  if(arr.indexOf(mod) > 0)return mod;
    
  return undefined; 

}
console.log(
findElement([1,3,5,8,9,11,13], num => (num % 2 === 0))); //8

////


function findElement(arr, func) {
  let num = 0;
  
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  
  return undefined;
}
console.log(
findElement([1,3,5,8,9,11,13], num => (num % 2 === 0)));
