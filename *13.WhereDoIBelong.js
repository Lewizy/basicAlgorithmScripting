function getIndexToIns(arr, num) {

  arr.push(num);
  arr.sort((a,b) => a-b);
 
  return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);


function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (var i=0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }
  return arr.length;
}
getIndexToIns([40, 60], 50);


function getIndexToIns(arr, num) {
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0; 
  for (var i=0;i<times;i++){
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
}
getIndexToIns([40, 60], 50);

function getIndexToIns(arr, num) {
  arr.sort((a,b) => a-b);
  var i = 0;
  while (num > arr[i]) {i++;}
  return i;
}
getIndexToIns([40, 60], 50);
