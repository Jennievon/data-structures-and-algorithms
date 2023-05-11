function maxProfit(prices: number[]): number {
  let lowestPriceToBuy = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    lowestPriceToBuy = Math.min(prices[i], lowestPriceToBuy);
    profit = Math.max(profit, prices[i] - lowestPriceToBuy);
  }

  return profit;
}
