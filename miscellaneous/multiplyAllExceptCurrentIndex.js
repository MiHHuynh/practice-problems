// You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function that takes a list of integers and returns a list of the products.

// For example, given: [1, 7, 3, 4]
// your function would return: [84, 12, 28, 21]
// by calculating: [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// Do not use division in your solution.

function multiplyAllExceptCurrentIdx(arr) {
  var totalProduct = arr.reduce(function(acc, val) {
    return acc * val;
  });
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(totalProduct/arr[i]);
  }
  return result;
}

function multiplyAllExceptCurrentIdx(arr) {
  var allProductsBefore = [];
  var allProductsAfter = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      allProductsBefore.push(1);
    }
    else {
      
    }
  }
}


multiplyAllExceptCurrentIdx([1,7,32,5]);