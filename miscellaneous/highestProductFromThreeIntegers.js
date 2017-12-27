// Given an array of integers, find the highest
// product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

// first: brute force approach with O(n^3) solution
function highestProductFromThreeIntegers(arrayOfInts) {
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


// second: slightly better approach at O(nlogn)
// if we sort it, the largest three numbers will be at the end of the array
// thus we can get the highest product by returning the product of the last 3 values
// or if there are negative numbers, we can check if the first 2 elements are negative
// and if they can return a higher product than the last 3
function highestProductFromThreeIntegers(arrayOfInts) {
  var sortedArr = arrayOfInts.sort(function(a, b){ return a-b; });
  var maxProduct = 0;
  maxProduct = Math.max(sortedArr[0]*sortedArr[1]*sortedArr[sortedArr.length-1], sortedArr[sortedArr.length-1]*sortedArr[sortedArr.length-2]*sortedArr[sortedArr.length-3]);
  return maxProduct;
}

// third: can we do better? is there an O(n) approach?
// greedy approach
// keep track of highest and lowest values so far as we traverse through array once
function highestProductFromThreeIntegers(arrayOfInts) {
  var currentMax = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var currentMin = Math.min(arrayOfInts[0], arrayOfInts[1]);
  var lowestProductOf2 = currentMax * currentMin;
  var highestProductOf2 = lowestProductOf2;
  var maxProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  for (let i = 2; i < arrayOfInts.length; i++) {
    maxProductOf3 = Math.max(maxProductOf3, arrayOfInts[i] * lowestProductOf2, arrayOfInts[i] * highestProductOf2);
    highestProductOf2 = Math.max(highestProductOf2, arrayOfInts[i] * currentMax, arrayOfInts[i] * currentMin);
    lowestProductOf2 = Math.min(lowestProductOf2, arrayOfInts[i] * currentMax, arrayOfInts[i] * currentMin);
    currentMin = Math.min(currentMin, arrayOfInts[i]);
    currentMax = Math.max(currentMax, arrayOfInts[i]);
  }
  return maxProductOf3;
}

highestProductFromThreeIntegers([-10,-10,1,2,3]);
highestProductFromThreeIntegers([1,2,3,4,6,234,2,7,0,1]);
highestProductFromThreeIntegers([1,2,3,4,5]);