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
