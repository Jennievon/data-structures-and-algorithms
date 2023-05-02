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
  if (n < 1 || n > 1000) {
    return;
  }

  const arr: number[] = readLine()
    // replace all whitespace characters at the end of the string with an empty string
    .replace(/\s+$/g, "")
    // split the string into an array of strings
    .split(" ")
    // convert each string to a number
    .map((arrTemp) => parseInt(arrTemp, 10));

  console.log(...arr.reverse());
}
