function containsDuplicate(nums: number[]): boolean {
  // STEPS:
  // 1. Create a set
  // 2. Iterate through the input array
  // 3. If the set already has the number, return true
  // 4. Otherwise, add the number to the set

  const set = new Set<number>();
  for (let number of nums) {
    if (set.has(number)) {
      return true;
    }
    set.add(number);
  }
  return false;
}

// EXPECTED RUNTIME: O(n)
// SPACE COMPLEXITY: O(n)

// The time complexity of this implementation is O(n)
// because it only iterates over the input array once
// and performs constant-time operations (adding and checking for elements in the Set)
