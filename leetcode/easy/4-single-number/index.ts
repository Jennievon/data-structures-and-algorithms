function singleNumber(nums: number[]): number {
  // STEPS:
  // 1. Create a stat variable
  // 2. Iterate through the input array
  // 3. XOR each number with the stat variable
  // 4. Return the stat variable

  let stat = 0;
  for (let i = 0; i < nums.length; i++) {
    // stat = stat ^ nums[i];
    stat ^= nums[i];
  }
  return stat;
}

// EXPLANATION:
// So, if we XOR a number with itself, we get 0.
// If we XOR a number with 0, we get the number itself.
// So, if we XOR all the numbers in the input array, we will be left with the number that is not repeated.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
