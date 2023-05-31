function search(nums: number[], target: number): number {
  // initialize left and right pointers
  let left = 0;
  let right = nums.length - 1;

  // binary search
  while (left <= right) {
    // find the middle index
    const middleIndex = Math.floor((left + right) / 2);

    // if the middle number is equal to the target number, return the middle index
    // otherwise, if the middle number is less than the target number, move the left pointer to the middle index + 1
    // otherwise, move the right pointer to the middle index - 1
    if (nums[middleIndex] === target) {
      return middleIndex;
    } else if (nums[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  // if the target number is not found, return -1
  return -1;
}
