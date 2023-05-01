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
  const T = parseInt(readLine().trim());
  // validate `T` wrt constraints
  if (T < 1 || T > 10) {
    return;
  }

  for (let i = 0; i < T; i++) {
    const S = readLine().trim();
    // validate length of `S` wrt constraints
    if (S.length < 2 || S.length > 10000) {
      return;
    }
    // create an array to hold even and odd indexes
    let odd = [] as string[];
    let even = [] as string[];
    // loop through the string and push to the expected array
    for (let j = 0; j < S.length; j++) {
      if (j % 2 === 0) {
        even.push(S[j]);
      } else {
        odd.push(S[j]);
      }
    }
    console.log(`${even.join("")} ${odd.join("")}`);
  }
}
