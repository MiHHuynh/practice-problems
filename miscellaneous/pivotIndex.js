/*
Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value. 

Constraints: 

Time Complexity: O(N) 
Space Complexity: O(1)
*/

function pivotIndex(arr){
  for (var i = 1; i < arr.length; i++) {
    if (sumArr(arr.slice(0,i)) === sumArr(arr.slice(i+1, arr.length))) {
      return i;
    }
  }
  return -1;
  
  function sumArr(arr) {
    if (arr.length === 0) return;
    return arr.reduce(function(acc, val){
      return acc += val;
    });
  }
}