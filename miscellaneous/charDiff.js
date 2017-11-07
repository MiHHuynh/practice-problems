/*
Please implement the following functions:

1. Hamming Distance (https://en.wikipedia.org/wiki/Hamming_distance).
This function takes in two strings of equal length, and calculates the distance between them. Here, "distance" is defined as the number of characters that differ at the same position. The function should ignore case.
If the inputs do not have the same length, the function should return "Input strings must have the same length."

2. Implement a function called oneCharDifference
which checks whether there two strings differ by a single character.
The difference may consist of one character being added, removed, or replaced, in which case the function must return true. In all other cases it must return false. As with hammingDistance, this function should ignore case.

*/

function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    return "Input strings must have the same length.";
  }
  var distance = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()) { distance++; } 
  }
  return distance;
}

function oneCharDifference(str1, str2) {
  // if the strings are the same length
  if (str1.length === str2.length) {
    return hammingDistance(str1, str2) === 1;
  }
  
  // if the diff between the lengths is 2+
  if (Math.abs(str1.length-str2.length) > 2) {
    return false;
  }
  
  // if the strings are not the same length but within 1 char
  var count = 0;
  var longerStr;
  var shorterStr;

  if (str1.length-str2.length === 1) {
    longerStr = str1.toLowerCase();
    shorterStr = str2.toLowerCase();
  } else {
    longerStr = str2.toLowerCase();
    shorterStr = str1.toLowerCase();
  }
  
  var i = 0;
  var j = 0;
  while (i < longerStr.length) {
    while (j < shorterStr.length) {
      if (count > 1) {
        return false;
      }
      if (longerStr[i] === shorterStr[j]) {
        i++;
        j++;
      } else {
        count++;
        i++;
      }
    }
    return true; // need this when diff character is last in longerstr
  }
  return true; // when differing character is not at the end of the longer str
}