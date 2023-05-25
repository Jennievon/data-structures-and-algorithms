function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const count = map.get(char) || 0;
    if (count === 0) return false;
    map.set(char, count - 1);
  }
  return true;
}

// Explantion
// We can use a map to store the count of each character in the first string.
// Then we can iterate through the second string and decrement the count of each character.
// If the count is 0, then we know that the second string has a character that is not in the first string.
// If the count is not 0, then we know that the second string has a character that is not in the first string.
// If we reach the end of the second string, then we know that the second string is an anagram of the first string.
// Time complexity is O(n)
// Space complexity is O(n)
// where, n = length of the first string.
