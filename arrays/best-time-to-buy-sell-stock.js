    // Best Time to Buy and Sell Stock
// Sliding Window / One Pass Technique
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
}

// Example usage:
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1]));   // 0
