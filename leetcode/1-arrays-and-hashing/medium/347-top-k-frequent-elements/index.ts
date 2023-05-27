class PriorityQueueElement {
  constructor(public value: number, public count: number) {}
}
function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length <= k) {
    return nums;
  }

  // // Create a frequency map
  // const map = new Map<number, number>();
  // // [1, 1, 1, 2, 2, 3] => { 1: 3, 2: 2, 3: 1 } - O(n)
  // for (const num of nums) {
  //   map.set(num, (map.get(num) || 0) + 1);
  // }

  // // Sort the keys by frequency i.e. [3, 1, 2] => [1, 2, 3] - O(nlogn)
  // const sortedNums = Array.from(map.keys()).sort((a, b) => {
  //   return map.get(b)! - map.get(a)!;
  // });

  // // Return the first k elements - O(k)
  // return sortedNums.slice(0, k);

  // Solution 2: Using a priority queue
  const frequencyMap = new Map<number, number>();

  // Count the frequency of each element
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Create a priority queue
  const queue: PriorityQueueElement[] = [];

  // Add elements to the priority queue
  for (const [num, count] of frequencyMap.entries()) {
    queue.push(new PriorityQueueElement(num, count));
  }

  // Sort the priority queue based on the count in descending order
  queue.sort((a, b) => b.count - a.count);

  // Extract the top k frequent elements from the priority queue
  const result: number[] = [];
  for (let i = 0; i < k; i++) {
    result.push(queue[i].value);
  }

  return result;
}
