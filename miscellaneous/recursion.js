function fib(num){
  // 1, 1, 2, 3, 5, 8
  // base case: 2 and 1, return 1
  if (num <= 2) {
    return 1;
  } else {
    return fib(num-1) + fib(num-2);
  }
}

function isPalindrome(str, start=0, end=str.length-1, length=str.length){
  if (length <= 1) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  // if the ends ARE equal...
  else {
    length -= 2;
    return isPalindrome(str, ++start, --end, length);
  }
}

function someRecursive(arr, fn){ 
  if (arr.length === 0) {
    return false;
  }
  if (fn(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), fn);
}

function reverse(str, length=str.length-1){
  if (length === 0) {
    return str[length];
  }
  return str[length].concat(reverse(str, --length));
}

function collectOddValues(arr, result=[]) {
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  if (arr.length === 1) {
    return result;
  }
  else {
    return collectOddValues(arr.slice(1), result);
  }
}

function flatten(nestedArr, res=[]){
  // take in nested array
  // if it's a regular value, store value in something
  // go on to next
  // if it's NOT a regular value (it is an array) then go in one level
  for (let i = 0; i < nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) {
      res = flatten(nestedArr[i], res);
    }
    else res.push(nestedArr[i]);
  }
  return res;
}

function capitalizeWords (arr, start=0, end=arr.length-1) {
  if (arr.length === 0) {
    return arr;
  }
  else if (start === end) {
    return [arr[start].toUpperCase()];
  }
  else {
    return [arr[start].toUpperCase()].concat(capitalizeWords(arr, ++start, end));
  }
}


function capitalizeFirst (arr) {
  
}

function nestedEvenSum () {
  
}