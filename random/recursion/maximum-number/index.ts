function maximumNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// with recursion
function maximumNumberWithRecursion(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], maximumNumberWithRecursion(arr.slice(1)));
}
