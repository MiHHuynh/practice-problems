// binarySearch
// This function should accept an array and value and return the index at which the value exists or -1 if the value can not be found.

// We are assuming the array is sorted and contains non-repeating, unique values
function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length-1;
  while (start <= end) {
    var mid = Math.floor((start + end)/2);
    if (arr[mid] === val) {
      return mid;
    }
    else if (arr[mid] > val) {
      end = mid - 1;
    }
    else if (arr[mid] < val) {
      start = mid + 1;
    }
  }
  return -1;
}

function binarySearchRecursive(arr, val, start=0, end=arr.length-1) {
  var mid = Math.floor((start + end)/2);
  if (arr[mid] === val) {
    return mid;
  }
  else if (start === end) {
    return -1;
  }
  else if (arr[mid] > val) {
    return binarySearchRecursive(arr, val, start, --end);
  }
  else if (arr[mid] < val) {
    return binarySearchRecursive(arr, val, ++start, end);
  }
}