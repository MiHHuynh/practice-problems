// Implement a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence of the
// characters in the second string. In other words, the function should check
// whether the characters in the first string appear somewhere on the second
// string, without their order changing.

function isSubsequence(str1, str2) {
  var newStart = 0;
  var counter = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = newStart; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        newStart = j + 1; // next time inner loop runs should start
        counter++;
        break;
      }
    }
  }
  return counter === str1.length;
}
