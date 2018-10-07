let log = console.log;


function confirmEnding(str, target) {
  
  //return str.substring(-target.length); //does not work
  // return str.endsWith(target); //true
  // return str.substr(str.length -target.length) == target; //true
  // return str.slice(-target.length) == target; //true
  return (str.slice(-target.length) == target) ? true : false ;
}
console.log(
confirmEnding("Bastian", "an"));


//The arguments of substring() represent the starting and ending indexes, 
//while the arguments of substr() represent the starting index and the length of characters to include in the returned string.

