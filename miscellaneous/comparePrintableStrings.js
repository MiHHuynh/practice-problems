function comparePrintableStrings(arrayOfKeypresses1, arrayOfKeypresses2) {
  // traverse both arrays from the end towards the front
  // compare value
  // if both are BS, decrement both pointers, increment both backspace counters
  var ptr1 = arrayOfKeypresses1.length - 1;
  var ptr2 = arrayOfKeypresses2.length - 1;
  while (ptr1 >= 0 && ptr2 >= 0) {
    [ptr1, ptr2] = findIndicesOfPairToCompare(arrayOfKeypresses1, arrayOfKeypresses2, ptr1, ptr2);
    if (arrayOfKeypresses1[ptr1] !== arrayOfKeypresses2[ptr2]) {
      return false;
    }
    if (ptr1 === 0 && ptr2 === 0) {
      return true;
    }
    else {
      findIndicesOfPairToCompare(arrayOfKeypresses1, arrayOfKeypresses2, --ptr1, --ptr2);
    }
  }
}

// handles backspaces
function findIndicesOfPairToCompare(arrayOfKeypresses1, arrayOfKeypresses2, ptr1, ptr2) {
  var areValidCharsNotYetFound = true;
  var bsCounter1 = 0;
  var bsCounter2 = 0;
  while (areValidCharsNotYetFound) {
    if (isBackspace(arrayOfKeypresses1[ptr1])) {
      ptr1--;
      bsCounter1++;
    }
    if (isBackspace(arrayOfKeypresses2[ptr2])) {
      ptr2--;
      bsCounter2++;
    }
    if (!isBackspace(arrayOfKeypresses1[ptr1]) && hadBackspaces(bsCounter1)) {
      ptr1 -= bsCounter1;
      bsCounter1 = 0;
    }
    if (!isBackspace(arrayOfKeypresses2[ptr2]) && hadBackspaces(bsCounter2)) {
      ptr2 -= bsCounter2;
      bsCounter2 = 0;
    }
    if (!isBackspace(arrayOfKeypresses1[ptr1]) && !isBackspace(arrayOfKeypresses2[ptr2])) {
      break;
    }
  }
  return [ptr1, ptr2];
}

function isBackspace(str) {
  return str === "BS";
}

function hadBackspaces(n) {
  return n > 0;
}

var kp1 = ['a', 'b', 'c', 'BS', 'c', 'BS', 'x'];
var kp2 = ['a', 'b', 'c', 'x', 'r', 'r', 'BS', 'BS'];
var kp3 = ['a', 'b', 'c', 'x'];
var kp4 = ['BS'];
var kp5 = ['x'];

comparePrintableStrings(kp3, kp2);