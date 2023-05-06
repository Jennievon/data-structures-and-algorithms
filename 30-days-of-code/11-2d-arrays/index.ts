"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  let arr: number[][] = Array(6);

  for (let i: number = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  console.log(hourglassSum(arr));
}

function hourglassSum(arr: number[][]): number {
  // each element in the array can have values between -9 and 9
  // the minimum sum of an hourglass is -9 * 7 = -63
  // the maximum sum of an hourglass is 9 * 7 = 63
  // so, maximumSum is initialised to -Infinity - the smallest possible value
  let maximumSum: number = -Infinity;

  // the hourglass can be anywhere in the array
  // so, we need to iterate over the entire array - rows and columns
  // but, the hourglass cannot be at the edges of the array because it will go out of bounds
  // so, we iterate through the rows from 0 to arr.length - 2
  // and through the columns from 0 to arr[i].length - 2

  // iterate through the rows of the array
  for (let row = 0; row < arr.length - 2; row++) {
    // iterate through the columns of the array
    for (let column = 0; column < arr[row].length - 2; column++) {
      // calculate the hourglass sum for the current pattern
      let currentSum =
        arr[row][column] + //a
        arr[row][column + 1] + //b
        arr[row][column + 2] + //c
        arr[row + 1][column + 1] + //d
        arr[row + 2][column] + //e
        arr[row + 2][column + 1] + //f
        arr[row + 2][column + 2]; //g
      // update maximumSum if the currentSum is greater
      if (currentSum > maximumSum) {
        maximumSum = currentSum;
      }
    }
  }
  return maximumSum;
}

// According to the task, the hourglass is defined as:
// a b c
//   d
// e f g
// The sum of an hourglass is the sum of all the numbers in it
// The maximum sum of an hourglass in the array is the answer

// The array is 6x6
// So, the minimum sum of an hourglass is -9 * 7 = -63
// The maximum sum of an hourglass is 9 * 7 = 63

// Arrays can be 1D - number[], string[], boolean[]
// Arrays can be 2D - imagine a table or matrix (number[][], string[][], boolean[][])
// Arrays can be 3D - imagine a cube (number[][][], string[][][], boolean[][][])

// 2D-Arrays are similar to the mathematical concept of matrices
// They are stored as an array of arrays
// Also, useful for storing data in a grid format
// Arrays can be accessed by specifying the row and column index
// Arrays can be iterated over using nested for loops
