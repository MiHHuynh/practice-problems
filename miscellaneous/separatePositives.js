// Given an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right.  The positive numbers and negative numbers need not be in sorted order.

// Note: To meet the space complexity constraints, perform the separation in-place (i.e., do not create/build a copy of the input array) 

// Examples:

//  [2, -1, -3, 6, -8, 10]  ->  [2, 10, 6, -3, -1, -8] 
//                 [-5, 5]  ->  [5, -5]
//               [1, 2, 3]  ->  [1, 2, 3]

//         Input:     nums: Array
//        Output:     Array

// Constraints:

//          Time:       O(N)
//         Space:       O(1)

function separatePositive(nums) {
  // start one pointer at the front
  // and another at the back
  // while the pointers are not at the same index
  //   if the back pointer finds a positive number,
  //   keep it in place
  //
  //   if the front pointer finds a negative number,
  //   swap with back

  var j = nums.length-1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) { // if it's negative, do a swap
      while (j >= i) {
        if (nums[j] > 0) { // if j is positive
          let temp = nums[j];
          nums[j] = nums[i];
          nums[i] = temp;
          j--;
          break;
        }
        j--;
      }
    }
  }
  return nums;
}

separatePositive([2,-10, 5,7,4,6, -100,-1,-3,6,-8,10,4,3,-1])