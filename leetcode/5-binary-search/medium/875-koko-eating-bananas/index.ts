function minEatingSpeed(piles: number[], h: number): number {
  let left = 1; // left pointer begins at 1, since Koko can only eat whole bananas per hour, the eating speed cannot be zero or negative.
  let right = Math.max(...piles); // right pointer - max value in piles

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2); // find the middle index
    let hours = 0; // hours to eat all bananas - initialize to 0

    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / middleIndex); // add hours to eat all bananas in piles[i]
    }

    // if hours is greater than h, we need to eat more bananas per hour
    // so we move left pointer to middleIndex + 1
    // if hours is less than or equal to h, we can eat less bananas per hour
    // so we move right pointer to middleIndex - 1
    if (hours > h) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return left;
}
