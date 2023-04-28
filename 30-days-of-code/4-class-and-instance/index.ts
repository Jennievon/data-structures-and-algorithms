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
  class Person {
    age: number;
    constructor(initialAge: number) {
      if (initialAge < 0) {
        this.age = 0;
        console.log("Age is not valid, setting age to 0.");
        return;
      }
      this.age = initialAge;
    }

    yearPasses() {
      this.age += 1;
    }

    amIOld() {
      if (this.age < 13) {
        console.log("You are young.");
      } else if (this.age >= 13 && this.age < 18) {
        console.log("You are a teenager.");
      } else {
        console.log("You are old.");
      }
    }
  }

  // T stores the number of stored test cases that have been read
  const T = parseInt(readLine().trim());
  // validate T wrt T constraints
  if (T < 1 || T > 4) {
    return;
  }

  // loop through and read the subsequent lines (wrt T)
  for (let i = 0; i < T; i++) {
    const age = parseInt(readLine().trim());

    // validate each age input, wrt age constraints, before creating and using a Person instance.
    if (age < -5 || age > 30) {
      continue;
    }

    const person = new Person(age);
    person.amIOld();
    for (let j = 0; j < 3; j++) {
      person.yearPasses();
    }
    person.amIOld();

    // Check if not the last test case, then print an empty line
    if (i !== T - 1) {
      console.log();
    }
  }
}
