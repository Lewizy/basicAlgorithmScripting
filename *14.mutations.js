function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }
 console.log(mutation(["hello", "hE"]));



function mutation(arr) {
  return arr[1].toLowerCase().split('')
    .every((letter) => {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
console.log(mutation(["hello", "hE"]));



function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let i in secondWord){
    if(firstWord.indexOf(secondWord[i]) < 0) return false;
  }
  return true;
 }
 console.log(mutation(["hello", "z"]));



 function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  
   for (let i in secondWord){
    if(!firstWord.includes(secondWord[i])) return false;
    }
  return true;
 }
 console.log(mutation(["hello", "e"]));
