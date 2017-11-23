// Collatz sequence.

// Given a positive whole number n, this function should produce an array given by the following rules:

// 1. The first element in the array should be n.

// 2. After the first element, each subsequent element should be equal to: 
//   - Half the previous element, if the previous element is even, 
//   - Three times the previous element plus one, if the previous element is odd. 
// Note that in either case, the result should be an integer.

// 3. The last element in the array should be 1. When you encounter your first 1, you should push it to the array and return the array.

// Examples:

// collatzSequence(4); // [4, 2, 1]
// collatzSequence(6); // [6, 3, 10, 5, 16, 8, 4, 2, 1]
// collatzSequence(7); // [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
// collatzSequence(0); // "Input must be a positive whole number."
// collatzSequence([]); // "Input must be a positive whole number."

function collatzSequenceIterative(num) {
  // first element is num
  // if num is even, next should be half of num
  // if num is odd, next should be num*3+1
  // numbers should always be integers
  // last element in array should be 1
  // as soon as 1 is reached, return the array
  
  // should return "Input must be a positive whole number" if number passed
  // in is invalid
  if (typeof num !== "number" || num < 1 || !Number.isInteger(num))  {
    return "Input must be a positive whole number.";
  }
  var result = [];
  do {
    result.push(num);
    if (num === 1) {
      return result;
    }
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num*3+1;
    }
  } while (num >= 1);
}

// //REFACTORED:
// function collatzSequenceIterative(num) {
//   if (num < 1 || !Number.isInteger(num)) return "Input must be a positive whole number.";
//   var result = [];
//   do {
//     result.push(num);
//     if (num === 1) return result;
//     num % 2 === 0 ? num /=2 : num*3+1;
//   } while (num >= 1);
// }

function collatzSequenceRecursive(num, result=[]) {
  if (typeof num !== "number" || num < 1 || !Number.isInteger(num))  {
    return "Input must be a positive whole number.";
  }
  result.push(num);
  if (num === 1) {
    return result;
  }
  if (num % 2 === 0) {
    return result.concat(collatzSequenceRecursive(num/2));
  } else {
    return result.concat(collatzSequenceRecursive(num*3+1));
  }
}

// //REFACTORED:
// function collatzSequenceRecursive(num, result=[]) {
//   if (typeof num !== "number" || num < 1 || !Number.isInteger(num))  {
//     return "Input must be a positive whole number.";
//   }
//   result.push(num);
//   if (num === 1) return result;
//   return num % 2 === 0 ? result.concat(collatzSequenceRecursive(num/2)) : result.concat(collatzSequenceRecursive(num*3+1));
// }