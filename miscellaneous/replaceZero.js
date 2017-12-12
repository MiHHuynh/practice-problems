// Write a function called replaceZero, which accepts an array of only 0s and 1s. 
// The function should return the index at which a 0 can be replaced with a 1 to get
// the maximum length sequence of continuous ones. If the array is empty or has only
// one element which is a 1 - return null.

// Time Complexity - O(n)
// Space Complexity - O(1)

function replaceZero(arr) {
  if (arr.length === 0 || (arr.length === 1 && arr[0] === 1)) {
    return null;
  }
  if (arr.length === 1 && arr[0] === 0) {
    return 0;
  }
  var i = 0, j = 1, counter = 0;
  while (i < arr.length && j < arr.length) {
    if (arr[i] === 0) {
      i++;
      j++;
    }
    else if (arr[i] === 1) {
      counter++;
      if (arr[j] === 1) {
        counter++;
        j++;
      }
    }
  }
}

replaceZero([1]) // null
replaceZero([]) // null
replaceZero([0]) // 0)
replaceZero([1,1,1,0]) // 3
replaceZero([1,1,0,1,1,0,1,0,1]) // 2)
replaceZero([0,0,1,0,1,1,1,0,1,1]) // 7
replaceZero([1,1,1,0,1,1,1,0,1,1,0,1,1,1,1]) // 3
replaceZero([0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1]) // 7