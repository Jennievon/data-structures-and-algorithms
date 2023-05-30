function characterReplacement(s: string, k: number): number {
  // to store the longest substring length
  let longestSubstringLength = 0;
  // to store the left and right pointers
  let left = 0;
  let right = 0;
  // to store the max count of a character in the current window
  let maxCount = 0;
  // to store the count of each character in the current window - { character: count}
  const characterCount = new Map<string, number>();

  while (right < s.length) {
    // get the character at the right pointer
    const character = s[right];
    // increment the count of the character
    const count = characterCount.get(character) || 0;
    // update the count of the character
    characterCount.set(character, count + 1);
    maxCount = Math.max(maxCount, count + 1);
    right++;

    // if the window is invalid, shrink the window
    // nb: the window is invalid if the length of the window - max count of a character in the window is greater than k
    if (right - left - maxCount > k) {
      // get the character at the left pointer and decrement the count of the character
      const character = s[left];
      const count = characterCount.get(character) || 0;
      characterCount.set(character, count - 1);
      left++;
    }

    longestSubstringLength = Math.max(longestSubstringLength, right - left);
  }

  return longestSubstringLength;
}
