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

multiplyAllExceptCurrentIdx([1,7,32,5]);