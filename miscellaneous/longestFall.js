// longestFall

// Given an array of integers, determine the length of the longest consecutive decrease of integers.

// Input: array of integers
// Output: integer

// Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

// Example 1:
// [5, 3, 1, 3, 0] -> 3


// 5-3-1 is the longest consecutive sequence of decreasing integers

function longestFall(nums) {
  // nums is an array of numbers that is not sorted
  // we need to find the longest subArray of number that decreasing
  // keep track of every consecutive span
  // some test cases: [5,3,1,6,7,8,5,4,3,2,1] --> 6, for 8,5,4,3,2,1
  // [8,9,10,5,4,3,2,1] --> 5, for 5,4,3,2,1
  // we can start with a window of two, and check if second val is
  // less than first one
  // increase size of window, then check again
  // resize window every time consecutive streak ends
  if (nums.length === 0) {
    return 0;
  }
  var start = 0;
  var end = 1;
  var currLongest = 1;
  var longest = 1;
  
  // run to end of nums makes O(n) time complexity
  while (start < nums.length && end < nums.length) {
    if (nums[start] > nums[end] && nums[end] < nums[end-1]) { // if consecutive decreasing
      currLongest++;
      end++;
    } else { // if the consecutive streak breaks
      start = end; // start a new window
      end = start+1;
      currLongest = 1;
    }
    longest = Math.max(currLongest, longest);
    // we want to make sure to store the last longest as we go along
  }
  return longest;
}