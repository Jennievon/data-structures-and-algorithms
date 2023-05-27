function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = [];
  const columns: Set<string>[] = [];
  const boxes: Set<string>[] = [];

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set();
    columns[i] = new Set();
    boxes[i] = new Set();
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];

      if (cell === ".") {
        continue; // Skip empty cells
      }

      // Check row
      if (rows[row].has(cell)) {
        // Duplicate digit in the same row
        return false;
      }
      rows[row].add(cell);

      // Check column
      if (columns[col].has(cell)) {
        // Duplicate digit in the same column
        return false;
      }
      columns[col].add(cell);

      // Check box
      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (boxes[boxIndex].has(cell)) {
        // Duplicate digit in the same sub-box
        return false;
      }
      boxes[boxIndex].add(cell);
    }
  }

  // All checks passed, Sudoku is valid
  return true;
}
