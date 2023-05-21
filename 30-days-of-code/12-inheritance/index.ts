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

class Person {
  firstName: string;
  lastName: string;
  idNumber: number;

  constructor(firstName: string, lastName: string, idNumber: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
  }
}

class Student extends Person {
  scores: number[];

  constructor(
    firstName: string,
    lastName: string,
    idNumber: number,
    scores: number[]
  ) {
    super(firstName, lastName, idNumber);
    this.scores = scores;
  }

  getGrade(): string {
    const average: number =
      this.scores.reduce((acc: number, score: number) => acc + score, 0) /
      this.scores.length;

    if (average >= 90 && average <= 100) {
      return "O";
    } else if (average >= 80 && average < 90) {
      return "E";
    } else if (average >= 70 && average < 80) {
      return "A";
    } else if (average >= 55 && average < 70) {
      return "P";
    } else if (average >= 40 && average < 55) {
      return "D";
    } else {
      return "T";
    }
  }
}

function main() {
  const [firstName, lastName, idNumber]: string[] = readLine().split(" ");
  let numberOfScores: number = +readLine();
  let scoresGotten: string[] = readLine().split(" ");
  let scores: number[] = scoresGotten.map(Number);

  const s: Student = new Student(firstName, lastName, +idNumber, scores);
  console.log("Name:", s.lastName + ", " + s.firstName);
  console.log("ID:", s.idNumber);
  console.log("Grade:", s.getGrade());
}
