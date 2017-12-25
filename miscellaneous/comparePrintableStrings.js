function comparePrintableStrings(arrayOfKeypresses1, arrayOfKeypresses2) {
  // traverse both arrays from the end towards the front
  // compare value
  // if both are BS, decrement both pointers, increment both backspace counters
  var ptr1 = arrayOfKeypresses1.length - 1;
  var ptr2 = arrayOfKeypresses2.length - 1;
  while (ptr1 >= 0 && ptr2 >= 0) {
    let kp1CharObj = findPrintableCharacter(arrayOfKeypresses1, ptr1);
    let kp2CharObj = findPrintableCharacter(arrayOfKeypresses2, ptr2);
    if (kp1CharObj["character"] !== kp2CharObj["character"]) {
      return false;
    }
    else {
      ptr1 = kp1CharObj["nextIndex"];
      ptr2 = kp2CharObj["nextIndex"];
    }
  }
  return true;
}

// finds first printable character from starting index indicated; defaults to last character if none passed in
// returns an object with values of next index to start checking at and first printable char found from previous
// starting point
function findPrintableCharacter(arrayOfKeypresses, ptr=arrayOfKeypresses.length-1) {
  var bsCounter= 0;
  while (ptr >= 0) {
    if (isBackspace(arrayOfKeypresses[ptr])) {
      ptr--;
      bsCounter++;
    }
    if (!isBackspace(arrayOfKeypresses[ptr])) {
      if (bsCounter > 0) {
        ptr -= bsCounter;
        bsCounter = 0;
      }
      else if (bsCounter === 0) return { "nextIndex": --ptr, "character": arrayOfKeypresses[ptr] };
    }    
  }
  // if array is all backspaces, or there are more backspaces than characters
  return { "nextIndex": --ptr, "character" : "" };
}

function isBackspace(str) {
  return str === "BS";
}

var kp1 = ['a', 'b', 'c', 'BS', 'c', 'BS', 'x'];
var kp2 = ['a', 'b', 'c', 'x', 'r', 'r', 'BS', 'BS'];
var kp3 = ['a', 'b', 'c', 'x'];
var kp4 = ['BS'];
var kp5 = ['x'];
var kp6 = ['BS', 'BS', 'BS'];
var kp7 = ['a', 'b', 'BS', 'BS', 'BS', 'BS'];

comparePrintableStrings(kp3, kp3); // true
comparePrintableStrings(kp3, kp2); // true
comparePrintableStrings(kp3, kp4); // false
comparePrintableStrings(kp4, kp4); // true
comparePrintableStrings(kp4, kp5); // false
comparePrintableStrings(kp5, kp5); // true
comparePrintableStrings(kp6, kp4); // true
comparePrintableStrings(kp6, kp7); // true