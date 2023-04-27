function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();
  for (let number of nums) {
    if (set.has(number)) {
      return true;
    }
    set.add(number);
  }
  return false;
}
