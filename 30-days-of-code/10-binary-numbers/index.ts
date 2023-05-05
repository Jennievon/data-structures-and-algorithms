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
  const n: number = parseInt(readLine().trim(), 10);
  const consecutiveOnes: number = countConsecutiveOnes(n);
  console.log(consecutiveOnes);
}

function countConsecutiveOnes(n: number): number {
  // get the highest number of consecutive 1s in the binary number
  // convert the number to a string to iterate over it
  const binary: string = n.toString(2);
  let max: number = 0;
  let current: number = 0;
  for (let i = 0; i < binary.length; i++) {
    // if the current digit is 1, increment the current count
    if (binary[i] === "1") {
      current++;
    } else {
      // if the current digit is 0, reset the current count and set the max count if necessary
      // this is necessary because the max count is only updated when a 0 is encountered
      max = Math.max(max, current);
      current = 0;
    }
  }
  return Math.max(max, current);
}
