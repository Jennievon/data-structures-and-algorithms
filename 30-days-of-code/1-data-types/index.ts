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
  const integer: number = 4;
  let double: number = 4.0;
  const str: string = "HackerRank";

  const processInput = (input: any) => {
    if (typeof input === "string" && isNaN(Number(input))) {
      return console.log(str + " " + input);
    }
    const hasDecimal = input.includes(".");
    if (hasDecimal) {
      return console.log((double + Number(input)).toFixed(1));
    }
    return console.log(integer + Number(input));
  };

  const firstInput = readLine();
  const secondInput = readLine();
  const thirdInput = readLine();

  processInput(firstInput);
  processInput(secondInput);
  processInput(thirdInput);
}
