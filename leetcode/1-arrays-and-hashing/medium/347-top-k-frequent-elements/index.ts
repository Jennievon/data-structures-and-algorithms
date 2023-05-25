function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length <= k) {
    return nums;
  }

  // Create a frequency map
  const map = new Map<number, number>();
  // [1, 1, 1, 2, 2, 3] => { 1: 3, 2: 2, 3: 1 } - O(n)
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Sort the keys by frequency i.e. [3, 1, 2] => [1, 2, 3] - O(nlogn)
  const sortedNums = Array.from(map.keys()).sort((a, b) => {
    return map.get(b)! - map.get(a)!;
  });

  // Return the first k elements - O(k)
  return sortedNums.slice(0, k);
}
