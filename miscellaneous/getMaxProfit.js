// Suppose we could access yesterday's stock prices as a list, where:
// The indices are the time in minutes past trade opening time, which was
// 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

// Write an efficient function that takes stock_prices_yesterday and returns the best
// profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// getMaxProfit(stockPricesYesterday); // returns 6 (buying for $5 and selling for $11)

// No "shorting"—you must buy before you sell. You may not buy and sell in the same
// time step (at least 1 minute must pass).

// function getMaxProfit(stockPricesYesterday) {
//   var currMaxProfit = 0;
//   for (let i = 0; i < stockPricesYesterday.length; i++) {
//     for (let j = i+1; j < stockPricesYesterday.length; j++) {
//       currMaxProfit = Math.max(stockPricesYesterday[j] - stockPricesYesterday[i], currMaxProfit);
//     }
//   }
//   return currMaxProfit;
// }

function getMaxProfit(stockPricesYesterday) {
  var currentMin = 0;
  var currentMax = 0;
  var currMaxProfit = 0;
  for (let i = 0; i < stockPricesYesterday.length; i++) {
    
  }
}


getMaxProfit([10, 7, 5, 8, 11, 9, 500]);

/*
keep track of current minimum
keep track of current max value?
and keep track of current max profit
but how does this become O(n)?

[10, 7, 5, 8, 11, 9, 500, 100, 42, 1, 2]

currmin = 10

currmin = 7

currmin = 5 currmax = 8 currprofit = 3

currmax = 11 currprofit = 5

currmax = 500 currprofit = 495


*/