/*
Write a function called nonRepeatSubstring which accepts a string and returns the longest substring where the characters in the substring do not repeat. Non-repeating characters means there are no two consecutive letters that are the same. 
You can assume the input string only has lowercase letters. 

Constraints: 

Time Complexity: O(N) 
Space Complexity: O(N) 
*/

function nonRepeatSubstring(str){
  // start at first character
  // compare to next
  // if the same, start at second character
  // compare to next
  // etc.
  // when the chain of unique characters end, break out of for loop
  // but maybe there is a longer substring later in the string?
  // so start at where you broke off, and do the same thing?
  var result = "";
  var currentLongest = "";
  var currentIndex;
  for (var i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
    else {
      currentIndex = i;
      currentLongest = result;
      break;
    }
  }
  var remainingStr = str.slice(currentIndex);
  if (remainingStr.length > result.length) {
    var next = nonRepeatSubstring(remainingStr);
    if (next.length > currentLongest.length) {
      currentLongest = next;
    }    
  }

  return currentLongest;
}