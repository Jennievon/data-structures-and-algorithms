function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length; // number of rows
  const n = matrix[0].length; // number of columns
  let left = 0; // left pointer
  let right = m * n - 1; // right pointer - m * n - 1 is the last index in the matrix

  // binary search
  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2); // find the middle index
    const row = Math.floor(middleIndex / n); // find the row of the middle index
    const col = middleIndex % n; // find the column of the middle index

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return false;
}
