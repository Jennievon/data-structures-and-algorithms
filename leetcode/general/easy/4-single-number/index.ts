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
// So, if we XOR a number with itself, we get 0. a^a = 0
// If we XOR a number with 0, we get the number itself. a^0 = a
// So, if we XOR all the numbers in the input array, we will be left with the number that is not repeated. //

// EXAMPLE:
// Input: [2, 3, 2, 4, 4]
// let stat = 0;
// stat = 0 ^ 2 = 2
// stat = 2 ^ 3 = 1
// stat = 1 ^ 2 = 3
// stat = 3 ^ 4 = 7
// stat = 7 ^ 4 = 3
// stat = 3 ^ 0 = 3
// Output: 3

// Note:
// XOR is a bitwise operator that returns 1 if both bits are different,
// and 0 if both bits are the same.
// 2^3 means 0010 XOR 0011 = 0001

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
