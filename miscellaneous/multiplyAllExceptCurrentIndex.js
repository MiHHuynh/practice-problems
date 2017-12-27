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
  var currentProduct = 1;
  // construct the array of values before
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      currentProduct = currentProduct * arr[i-1];
    }
    allProductsBefore.push(currentProduct);
  }

  // construct the array of values after
  currentProduct = 1;
  for (let j = arr.length-1; j >= 0; j--) {
    if (j !== arr.length-1) {
      currentProduct = currentProduct * arr[j+1];
    }
    allProductsAfter[j] = currentProduct; // avoiding unshift to keep time to O(n)
  }

  var result = [];
  for (let k = 0; k < arr.length; k++) {
    let product = allProductsBefore[k] * allProductsAfter[k];
    result.push(product);
  }
  return result;
}


multiplyAllExceptCurrentIdx([1,7,32,5]);

// Before: [1, 1, 7, 224]
// After: [1120, 160, 5, 1]