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

// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
}

// Given a divisor and a bound, find the largest integer N such that:
// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.
function maxMultiple(divisor, bound) {

}
