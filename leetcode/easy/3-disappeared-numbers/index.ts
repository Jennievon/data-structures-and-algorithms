function findDisappearedNumbers(nums: number[]): number[] {
  const disappearedNumbers = [] as number[];
  // STEPS:
  // 1. use the input array as a lookup table to mark which numbers are present
  // 2. iterate through the array, when we encounter a number, we find the number's index
  // by subtracting 1 from the number. We then mark the number at that index as negative.

  // Note: We use Math.abs() to ensure that we don't accidentally flip the sign of a number
  // that was already marked as negative.

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }
  // 3. iterate through the array again and check which indices are still positive.
  // These correspond to the missing numbers, so we add them to the disappearedNumbers array.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      disappearedNumbers.push(i + 1);
    }
  }

  return disappearedNumbers;
}
