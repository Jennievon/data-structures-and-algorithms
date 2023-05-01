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
  if (T < 1 || T > 10) {
    return;
  }

  for (let i = 0; i < T; i++) {
    const S = readLine().trim();
    let odd = [] as string[];
    let even = [] as string[];
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
