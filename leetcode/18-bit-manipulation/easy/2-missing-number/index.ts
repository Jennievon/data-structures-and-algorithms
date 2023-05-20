function missingNumber(nums: number[]): number {
  // STEPS using Gauss'/Guass summation/arithmetic series formula:
  // 1. Create a sum variable
  // 2. Iterate through the input array
  // 3. Add each number to the sum
  // 4. Return the difference between the sum and the expected sum
  const n = nums.length;
  let sum = 0;
  for (let number of nums) {
    sum += number;
  }
  return (n * (n + 1)) / 2 - sum;
}

// EXPECTED RUNTIME: O(n)
// SPACE COMPLEXITY: O(1)

//The time complexity of this implementation is O(n), because we iterate through the input array once.
