function checkInclusion(s1: string, s2: string): boolean {
  let s1Frequency = new Map<string, number>();
  let s2Frequency = new Map<string, number>();

  // set frequency of s1 characters
  for (const character of s1) {
    s1Frequency.set(character, (s1Frequency.get(character) || 0) + 1);
  }

  let right = 0;
  let left = 0;
  // loop through s2, using sliding window - right pointer
  while (right < s2.length) {
    // set frequency of s2 characters
    s2Frequency.set(s2[right], (s2Frequency.get(s2[right]) || 0) + 1);

    // if the window is bigger than s1, shrink the window - left pointer
    if (right - left + 1 > s1.length) {
      const characterToRemove = s2[left];
      s2Frequency.set(
        characterToRemove,
        (s2Frequency.get(characterToRemove) || 0) - 1
      );
      if (s2Frequency.get(characterToRemove) === 0) {
        s2Frequency.delete(characterToRemove);
      }
      left++;
    }

    // if the size of the two maps are the same, check if they are permutations
    // permutation check is done by comparing the frequency of each character; the two maps should be identical
    if (s2Frequency.size === s1Frequency.size) {
      // set isPermutation to true
      let isPermutation = true;
      // loop through s1Frequency to compare with s2Frequency - if any character is not the same, set isPermutation to false
      for (const [char, frequency] of s1Frequency) {
        if (s2Frequency.get(char) !== frequency) {
          isPermutation = false;
          break;
        }
      }
      if (isPermutation) {
        return true;
      }
    }
    // increment right pointer to continue sliding window until the end of s2
    // or until the window is bigger than s1 length (shrink the window) or until the two maps are the same size (check if they are permutations)
    right++;
  }
  return false;
}
