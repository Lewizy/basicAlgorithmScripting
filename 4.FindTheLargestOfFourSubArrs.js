function largestOfFour(arr) {
  
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var indexZero = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      let wholeArray = arr[i][j];      
        if(wholeArray > indexZero ){
          indexZero = wholeArray;
     }   
    }
    results.push(indexZero);
  }
  return results;
}
console.log(
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//

function largestOfFour(arr) {

  var emtyArr = [0,0,0,0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      let wholeArray = arr[i][j];
        if(wholeArray > emtyArr[i] ){
          emtyArr[i] = wholeArray;
    }   
   }
  }
  return emtyArr;
}
console.log(
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
));

//Approach #2: Return the Largest Numbers in a Array With Built-In Functions — with map() and reduce()

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray){
    
      return subArray.reduce(function (acc, value) { 
        if (value > acc){
          return value;
        }else{
            return acc;
          } 
      }, 0);
    
  });
}log(
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/* Map process and Reduce method cycles
      currentLargestNumber => cLN
      previousLargestNumber => pLN
      Iteration in the first array
          For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
          First iteration:         4           0        4 > 0? => TRUE              4             /
          Second iteration:        5           4        5 > 4? => TRUE              5             /
          Third iteration:         1           5        1 > 5? => FALSE             /             5
          Fourth iteration:        3           5        3 > 5? => FALSE             /             5
          Fifth iteration:         /           5                                               returns 5
       Exit the first array and continue on the second one
      Iteration in the second array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        13           0        13 > 0? => TRUE            13              /
        Second iteration:       27          13        27 > 13? => TRUE           27              /
        Third iteration:        18          27        18 > 27? => FALSE           /             27
        Fourth iteration:       26          27        26 > 27? => FALSE           /             27
        Fifth iteration:         /          27                                                returns 27
      Exit the first array and continue on the third one
      Iteration in the third array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        32           0        32 > 0? => TRUE            32              /
        Second iteration:       35          32        35 > 32? => TRUE           35              /
        Third iteration:        37          35        37 > 35? => TRUE           37              /
        Fourth iteration:       39          37        39 > 37? => TRUE           39              /
        Fifth iteration:         /          39                                                returns 39
      Exit the first array and continue on the fourth one
      Iteration in the fourth array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        1000         0        1000 > 0? => TRUE         1000             /
        Second iteration:       1001       1000       1001 > 1000? => TRUE      1001             /
        Third iteration:        857        1001       857 > 1001 => FALSE        /             1001
        Fourth iteration:        1         1001       1 > 1001? => FALSE         /             1001
        Fifth iteration:         /         1001                                              returns 1001
      Exit the first array and continue on the fourth one 
    }, 0); // 0 serves as the context for the first pLN in each sub array
  });
}*/



//Approach #3: Return the Largest Numbers in a Array With Built-In Functions — with map() and apply()

function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]
    
    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


