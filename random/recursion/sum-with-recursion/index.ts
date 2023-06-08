function sumWithRecursion(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumWithRecursion(arr.slice(1));
}

// explanation
// sumWithRecursion([1, 2, 3])
// 1 + sumWithRecursion([2, 3])
// 1 + 2 + sumWithRecursion([3])
// 1 + 2 + 3 + sumWithRecursion([])
// 1 + 2 + 3 + 0
// 6

// arr.slice(1) is the same as arr.slice(1, arr.length)
// arr.slice(1) returns a new array with the elements from index 1 to the end of the array
