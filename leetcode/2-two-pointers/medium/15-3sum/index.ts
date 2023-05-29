function threeSum(nums: number[]): number[][] {
  // sort array in non-decreasing order
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // iterate through array; for each element, find two other elements that sum to 0
  //iterable is nums.length - 2 because we need to have at least 3 elements to find a triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // if current element is greater than 0 and previous element is the same as current, skip to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // left is i + 1 because we don't want to use the same element twice
    let left = i + 1;
    // right is nums.length - 1 because the index of the last element is nums.length - 1
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];

      // if sum is 0, add to result and move left and right pointers
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // if left or right is the same as the previous element, move left or right pointer
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
        // if sum is less than 0, move left pointer
      } else if (sum < 0) {
        left++;
        // if sum is greater than 0, move right pointer
      } else {
        right--;
      }
    }
  }

  return result;
}
