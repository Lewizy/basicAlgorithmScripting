let myArray  = ["one",1,89,0,"",NaN,15,null,undefined,false];

var myFilterArray = myArray.filter(Boolean);                
console.log(myFilterArray);//[ 'one', 1, 89, 15 ]

let filtered = myArray.filter((v) => v);
console.log(filtered);//[ 'one', 1, 89, 15 ] <=== wtf??
/* filter() calls a provided callback function once for each element in an array, 
and constructs a new array of all the values for which callback RETURNS A VALUE THAT COERCES TO TRUE.*/
