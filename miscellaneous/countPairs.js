// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

function countPairs(arr, sum) {
  // find the number of pairs that would make the sum
  // need some kind of count for the pairs
  var count = 0;
  
  // start at first number
  // add to every number after it
  // increment count if the sum is found
  // go to second number
  // add to every number after it
  // increment count if the sum is found
  // etc.
  var currentNum = 0;
  for (var i = 0; i < arr.length; i++) {
    currentNum = arr[i];
    for (var j = i+1; j < arr.length; j++) {
      if (currentNum + arr[j] === sum) {
        count++;
      }
    }
  }
  return count;
}


// Bonus 1 

// Solve this algorithm with the following constraints:

// Time Complexity - O(n)
// Space Complexity - O(n)
// [1,2,3,4,10,19], sum = 20
// need {19,18,17,16,10,1}
// is arr[i] in needed? if true count++

function countPairs2(arr, sum) {

  var count = 0;
  var neededNums = new Set();
  // make an object of the difference we need
  // check if each value in arr is also in object

  for (let i = 0; i < arr.length; i++) {
    neededNums[arr[i]] = sum-arr[i];
  }
}

// Bonus 2 

// Solve this algorithm with the following constraints:

// Time Complexity - O(n * log(n))
// Space Complexity - O(1)