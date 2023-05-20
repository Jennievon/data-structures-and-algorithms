function nextGreatestLetter(letters: string[], target: string): string {
  // initialize left and right pointers
  let left = 0;
  let right = letters.length - 1;

  // binary search
  while (left <= right) {
    // find the middle index
    const middleLetterIndex = Math.floor((left + right) / 2);

    // if the middle letter is less than or equal to the target letter, move the left pointer to the middle index + 1
    // otherwise, move the right pointer to the middle index - 1
    if (letters[middleLetterIndex] <= target) {
      left = middleLetterIndex + 1;
    } else {
      right = middleLetterIndex - 1;
    }
  }

  // return the letter at the left pointer index
  if (left < letters.length) {
    return letters[left];
  }

  // if the left pointer is out of bounds, return the first letter in the array
  return letters[0];
}

// Explantion
// given an array of letters that are sorted in ascending order and a target letter
// return the smallest letter in the array that is greater than the target letter
// if there is no letter that is greater than the target letter, return the first letter in the array

// Binary search is an efficient algorithm used to search for a specific element in a sorted array or list
// It follows a divide-and-conquer approach by repeatedly dividing the search space in half and narrowing down the range of possible solutions.

// Binary search works efficiently because it eliminates half of the remaining search space at each iteration, reducing the search range exponentially.

// Time complexity: O(log n) - n is the number of elements in the array; we are dividing the search space in half at each iteration
// Space complexity: O(1) - we are not using any extra spaceß
