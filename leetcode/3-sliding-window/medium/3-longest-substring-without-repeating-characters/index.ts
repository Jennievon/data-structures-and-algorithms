function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  let longestSubstringLength = 0;
  let left = 0;
  let right = 0;
  // Use a set to keep track of unique characters
  const uniqueCharacters = new Set<string>();

  // Move the right pointer until we find a duplicate character
  while (right < s.length) {
    // If the character is not in the set, add it to the set and move the right pointer
    if (!uniqueCharacters.has(s[right])) {
      uniqueCharacters.add(s[right]);
      right++;
      longestSubstringLength = Math.max(
        longestSubstringLength,
        uniqueCharacters.size
        // or right - left, instead of uniqueCharacters.size
      );
    } else {
      // If the character is in the set, remove the character from the set and move the left pointer
      uniqueCharacters.delete(s[left]);
      left++;
    }
  }

  return longestSubstringLength;
}

//explanation
// sliding window is a technique for iterating through a list that requires keeping track of a subset of data
// the subset of data is usually an array or a string
// the subset is called a window
// the window is the range of indices that we are currently looking at
// the window is usually defined by two pointers, the start and the end
// the start and end pointers are usually represented by left and right
// the left and right pointers are usually initialized to 0
// the right pointer is usually incremented by 1
// the left pointer is usually incremented by 1 when a condition is met
// the condition is usually when the window is no longer valid
// the window is no longer valid when
//  - there is a duplicate character
//  - the sum of the window is greater than a target
//  - the sum of the window is less than a target
//  - the length of the window is greater than a target
//  - the length of the window is less than a target

// in this problem, we are looking for the longest substring without repeating characters
// a set to keep track of unique characters - subset of data
// a left and right pointer to define the window
// the right pointer to iterate through the string
// the left pointer to remove characters from the set
// the size of the set to keep track of the longest substring length
// the right pointer is incremented by 1
// the left pointer is incremented by 1 when a duplicate character is found
// the window is no longer valid when there is a duplicate character
// the window is no longer valid when the left pointer is incremented by 1
