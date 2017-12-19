// Given an array of integers, find the highest
// product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

function highestProductFromThreeIntegers(arrayOfInts) {
  // first: brute force approach with O(n^3) solution
  var currentMax = 0;
  for (let i = 0; i < arrayOfInts.length; i++) {
    for (let j = 0; j < arrayOfInts.length; j++) {
      for (let k = 0; k < arrayOfInts.length; k++) {
        if (i !== j && i !== k && j !== k) {
          currentMax = Math.max(currentMax, arrayOfInts[i]*arrayOfInts[j]*arrayOfInts[k]);  
        }
      }
    }
  }
  return currentMax;
}

highestProductFromThreeIntegers([1,2,3,4,5]);