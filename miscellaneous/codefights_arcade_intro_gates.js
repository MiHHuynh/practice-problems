// You are given a two-digit integer n. Return the sum of its digits.
function addTwoDigits(n) {
    return Math.floor(n/10) + (n%10);
}

// Given an integer n, return the largest number that contains exactly n digits.
function largestNumber(n) {
    return Math.pow(10, n) - 1;
}

// n children have got m pieces of candy. They want to eat as much candy as they can, 
// but each child must eat exactly the same amount of candy as any other child. 
// Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
function candies(n, m) {
    return m - (m%n);
}

