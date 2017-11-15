// constructNote

// You are trying to construct a message but you only have a limited collection of letters.  Determine if the message can be built with the letters that you are given.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Input: message {string}, letters {string}

// Output: boolean

// Constraints: 
// if M is the length of messages and N is the length of letters:

// Time Complexity: O(M+N) 
// Space Complexity: O(N) 

//  Example 1:
// 'aa', 'abc' -> false


// requires two a's but there is only one available

function constructNote(message, letters) {
  // count number of unique letters in the letters
  // check against message to see if there are enough letters; decrement the counter
  
  // count unique chars in letters
  var lettersCount = {};
  for (let i = 0; i < letters.length; i++) {
    if (lettersCount[letters[i]] === undefined) {
      lettersCount[letters[i]] = 0;
    }
    lettersCount[letters[i]]++;
  }
  
  // every time there is a match, decrement the counter
  // if the counter goes below zero or it is not defined, it means
  // that the message has more letters than letters can provide
  // or that the message has a letter that letters does not have
  // respectively, so that should return false
  // if we go through entire counter without problems, return true
  for (let j = 0; j < message.length; j++) {
    if (lettersCount[message[j]] === undefined || lettersCount[message[j]] === 0) {
      return false;
    }
    lettersCount[message[j]]--;
  }
  return true;
}