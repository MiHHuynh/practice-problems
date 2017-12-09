function reverseWords(arr) {
  var res = arr.reverse();
  let i = 0;
  let j = 1;
  while (i < res.length && j <= res.length) {
    if (res[i].trim() === "") {
      i++;
      j++;
    }
    else if (j === res.length || res[j].trim() === "") {
      var spaceIdx = j;
      j--;
      while (i <= j) {
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
        j--;
        i++;
      }
      i = spaceIdx + 1;
      j = i + 1;
    }
    else {
      j++;
    }
  }
  return res;
}


// Test Case #2
// Input:
 
// ["a"," "," ","b"]
// Expected:
 
// ["b"," "," ","a"]
// Actual:
 
// [ 'b', ' ', 'a', ' ' ]

 arr = ["a", " ", " ", "b"];

reverseWords(arr);