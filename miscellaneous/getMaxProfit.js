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
  if (stockPricesYesterday.length < 2) {
    return "We need at least two prices in order to get a profit.";
  }
  var currentMin = stockPricesYesterday[0];
  var currMaxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
  var maxProfit = 0;
  var i = 1;
  while (i < stockPricesYesterday.length) {
    currMaxProfit = stockPricesYesterday[i] - currentMin;
    if (!maxProfit) maxProfit = currMaxProfit;
    else maxProfit = Math.max(currMaxProfit, maxProfit);
    currentMin = Math.min(currentMin, stockPricesYesterday[i]);
    i++;
  }
  return maxProfit;
}

getMaxProfit([5, 4, 3, 2, 1]);
getMaxProfit([10, 7, 5, 8, 11, 9, 500]);