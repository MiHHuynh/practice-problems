// Write a recursive function called letterTally which accepts a string and returns an object containing tallies of each letter. The keys of the object are the letters and the values are the counts.
// letterTally('potato'); // { p: 1, o: 2, t: 2, a:1 }
// letterTally('mississippi'); // { m: 1, i: 4, s: 4, p: 2 }

function letterTally (str, start=0, end=str.length-1, counter={}) {
  if (str.length === 0) {
    return counter;
  }
  
  if (!counter[str[start]]) {
    counter[str[start]] = 0;
  }
  counter[str[start]]++;

  if (start === end) {
    return counter;
  }
  else {
    return letterTally(str, ++start, end, counter);
  }
}

function compress () {
  
}

function augmentElements () {
  
}

function minimizeZeroes () {
  
}

function alternateSign () {
  
}


function numToText () {
  
}

function categorize(){
  
}