function twoSum(nums: number[], target: number): number[] {
  const hashmap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;

    if (hashmap.has(difference)) {
      return [hashmap.get(difference)!, i];
    }

    hashmap.set(num, i);
  }

  return [];
}

// Explanation:
// we use a Map data structure to store the elements and their indices
// we iterate through the array and for each element, we calculate the difference between the target and the current element
// if the difference exists in the hashmap, we return the indices of the current element and the difference
// if the difference does not exist in the hashmap, we add the current element to the hashmap
// if no two elements add up to the target, we return an empty array

// Time Complexity:
// O(n) - we iterate through the array once

// Space Complexity:
// O(n) - we store the elements and their indices in a hashmap

// the ! operator is used to assert that the value obtained from the map is not undefined.

// Tests
// console.log(twoSum([2, 7, 11, 15], 9));
// hashmap = { 2: 0 }
// hashmap = { 2: 0, 7: 1 }
// hashmap = { 2: 0, 7: 1, 11: 2 }
// hashmap = { 2: 0, 7: 1, 11: 2, 15: 3 }
// difference = 9 - 2 = 7
// hashmap has 7, so return [hashmap.get(7), 0] = [1, 0]
// [1, 0]
