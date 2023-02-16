//From leetcode
// var maxProfit = function(prices) {
//     if(prices == null || prices.length <= 1) return 0;
//     let minBuy = prices[0];
//     let profit = 0;
//     for(let i = 1; i < prices.length; i++) {
//         minBuy = Math.min(minBuy, prices[i]);
//         profit = Math.max(profit, prices[i] - minBuy);
        
//         console.log("prices : ", prices[i])
//         console.log("minBuy : ", minBuy)
//         console.log("profit : ", profit)
//         console.log("prices[i] - minBuy : ", prices[i] - minBuy)
//         console.log('-----day end------')
//     }
//     return profit;
// };

var maxProfit = function(prices){
    let costPrice = prices[0]
    let profit = 0
    for(let i = 0 ; i < prices.length ; i++){
        costPrice = Math.min(costPrice , prices[i]) //Comparing the minimum price and setting it as cost price
        const currentDayPrice = prices[i]
        const currentDayProfit = currentDayPrice - costPrice
        profit = Math.max(profit , currentDayProfit) //Comparing the existing profit with current day profit and setting the maximum value at global profit
    }
    return profit
}
const input = [7,1,5,3,6,4]
const input2 = [7,6,4,3,1]
const input3 = [1,2]
const input4 = [2,4,1]
const output = maxProfit(input4)
console.log("Output : ", output)