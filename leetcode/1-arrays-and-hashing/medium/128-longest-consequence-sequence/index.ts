function longestConsecutive(nums: number[]): number {
  const numbersSet = new Set<number>(nums);
  let maxLength = 0;

  for (let number of numbersSet) {
    if (!numbersSet.has(number - 1)) {
      let currentLength = 1;

      while (numbersSet.has(number + 1)) {
        number++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

// function longestConsecutive(nums: number[]): number {
//   const numbersSet = new Set<number>(nums);
//   let maxLength = 0;
//   for (const number of numbersSet) {
//     if (!numbersSet.has(number - 1)) {
//       let currentNumber = number;
//       let currentLength = 1;
//       while (numbersSet.has(currentNumber + 1)) {
//         currentNumber += 1;
//         currentLength += 1;
//       }
//       maxLength = Math.max(maxLength, currentLength);
//     }
//   }
//   return maxLength;
// }
