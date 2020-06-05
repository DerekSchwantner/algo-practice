// Given an input amount of change x, write a function to determine the minimum number of coins required to make that amount of change.

function waysToReturnChange(denominations, numOfCoins, amount) {
  if (amount === 0) return 1; // Perfect!

  if (amount < 0) return 0; // No solution exists for negative amount

  if (numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!

  return;
}
