// Given a string and a number n, truncate the string to a shorter string containing at most n characters. If the string gets truncated, the truncated return string should have a "..." at the end.  Because of this, the smallest number passed in as a second argument should be 3.

// Examples:

// truncate("Hello World", 6) // "Hel..."
// truncate("Problem solving is the best!", 10) // "Problem..."
// truncate("Yo", 100) // "Yo"

function truncateIteratively(str, finalLength) {
  if (finalLength < 3) return "Truncation must be at least 3 characters.";
  if (str.length < finalLength) return str;
  var newStr = str.slice(0,finalLength-3);
  newStr += "...";
  return newStr;
}

function truncateRecursively(str, finalLength) {
  // if the finalLength is larger than 3
  // and the length of the str is also larger
  // eg. 4 for finalLength means we need 4-3 for the character in the str
  // that remains
  
  // when str.length > finalLen, str.slice(0,finalLength-3), then += "..."
  var newStr = "";
  if (finalLength < 3) return "Truncation must be at least 3 characters.";
  if (str.length < finalLength) return str;
  if (str.length === finalLength) {
    newStr = str.slice(0, str.length-3);
    newStr += "...";
    return newStr;
  }
  return newStr.concat(truncateRecursively(str.slice(0, -1), finalLength));
}
