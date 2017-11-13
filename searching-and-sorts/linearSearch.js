// linearSearch
// This function should accept an array and value and return the first index at which the value exists or -1 if the value can not be found.

function linearSearch(arr, val){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

function linearSearchRecursive(arr, val, start=0, end=arr.length-1){
  if (!arr.length || (start === end && arr[start] !== val)) {
    return -1;
  }
  if (arr[start] === val) {
    return start;
  }
  else {
    return linearSearch(arr, val, ++start, end);
  }
}
