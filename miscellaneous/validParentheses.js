/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid.
validParentheses should return true if the string is valid, and false if it's invalid.
*/

function validParentheses(parens) {
  if (parens[0] !== "(" || parens.length < 2 || parens.length % 2 !== 0) {
    return false;
  }
  var numOpen = 0;
  for (let i = 0; i < parens.length; i++) {
    if (numOpen < 0) {
      return false;
    }
    if (parens[i] === "(") {
      numOpen++;
    }
    else if (parens[i] === ")") {
      numOpen--;
    }
  }
  return true;
}


validParentheses("()") // true 
validParentheses(")(()))") // false 
validParentheses("(") // false 
validParentheses("(())((()())())") // true 
validParentheses('))((') // false
validParentheses('())(') // false
validParentheses('()()()()())()(') // false