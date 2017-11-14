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

// Write a recursive function called compress which eliminates consecutive duplicates in a list. If the list contains repeated elements, they should be replaced with a single copy of the element. The order of the elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

// 4-liner version to look cool
// function compress (arr, result=[], start=0, end=arr.length-1) {
//   if (arr.length === 0) return arr;
//   if (arr[start] !== result[result.length-1]) result.push(arr[start]);
//   if (start === end) return result;
//   return compress(arr, result, ++start, end);
// }

function compress (arr, result=[], start=0, end=arr.length-1) {
  if (arr.length === 0) {
    return arr;
  }
  if (arr[start] !== result[result.length-1]) {
    result.push(arr[start]);
  }
  if (start === end) {
    return result;
  }
  else {
    return compress(arr, result, ++start, end);
  }
}

// Write a recursive function called augmentElements, which takes an array of arrays and a value. The function should return a new array of arrays with the value appended to each subarray. The function should not mutate the original input!

// var arr1 = [[1, 2], [3, 4, 5]];
// var arr2 = [[],[3],[7]];

// augmentElements(arr1, 6); // [[1,2,6],[3,4,5,6]]
// augmentElements(arr2, 5); // [[5],[3,5],[7,5]]

// arr1; // [[1, 2], [3, 4, 5]]
// arr2; // [[],[3],[7]]

function augmentElements () {
  
}

// Write a recursive function called minimizeZeroes which reduces a series of zeroes to a single 0 in a given list. The order of the list should remain unchanged.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

function minimizeZeroes () {
  
}

// Write a recursive function called alternateSign, which alternates the numbers in an array between positive and negative regardless of their original sign. The first number in the index should always be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7, 8,-3,1,-4]

function alternateSign () {
  
}

// Write a recursive function called numToText, which accepts a string and returns a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10) and greater than 0.
// numToText("My 2 favorite numbers are 4 and 1"); // "My two favorite numbers are four and one"
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

function numToText () {
  
}

// Given a list of categories with a parent object, write a recursive function called categorize that orders the list of categories into a tree-like hierarchy. Here are the categories that we get from a service. They have the name and their parent category.
// Arrange those categories in a tree-like structure so you can list them somewhere on the page. The first thing that can come to your mind is to use some nested loops, however this is not the most elegant approach. It will work for the time being, but you will depend on the structure remaining as it is right now and if in some point a child level is removed or added you will have to modify your code. 

// const input = [  
//   { name: 'tech', parent: null },
//   { name: 'hot_right_now', parent: 'tech' },
//   { name: 'upcomming_releases', parent: 'tech' },
//   { name: 'gadgets', parent: 'tech' },
//   { name: 'news', parent: null },
//   { name: 'social', parent: 'startups' },
//   { name: 'europe', parent: 'news' },
//   { name: 'asia', parent: 'news' },
//   { name: 'events', parent: 'news' },
//   { name: 'startups', parent: null },
//   { name: 'funding', parent: 'startups' },
//   { name: 'unicorns', parent: 'startups' },
//   { name: 'venture_capital', parent: 'funding' },
//   { name: 'crowdfunding', parent: 'funding' },
//   { name: 'usa', parent: 'news' }
// ]

// categorize(input) 

/*
{
  tech: { hot_right_now: {}, upcomming_releases: {}, gadgets: {} },
  news: { europe: {}, asia: {}, events: {}, usa: {} },
  startups: {
    social: {},
    funding: { venture_capital: {}, crowdfunding: {} },
    unicorns: {}
  }
};

*/

function categorize(){
  
}