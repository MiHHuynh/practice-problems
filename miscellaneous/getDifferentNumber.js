function getDifferentNumber(arr) {
  const MAX_INT = 2^31-1;
  /*
  var sorted = arr.sort(function(a,b) {
    return a-b;  //nlog(n)
  });
  
  for (var i = 0; i <= sorted[sorted.length-1] + 1; i++) { // n
    if (!sorted.includes(i)) { // n
      console.log(i)
      return i;
    }
  }*/
  
  var inputSet = new Set(arr);
  for (let i = 0; i < MAX_INT; i++) {
    if (!inputSet.has(i)) {
      return i;
    }
  }
  
}