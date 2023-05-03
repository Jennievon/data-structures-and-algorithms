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
  if (currentLine >= inputLines.length) {
    return "";
  }
  return inputLines[currentLine++].trim();
}

function main() {
  // create an dictionary/hash table to store the phone book
  const phoneBook: Record<string, string> = {};
  // read the number of entries in the phone book
  const n = parseInt(readLine());
  // loop through the entries and add them to the phone book object
  for (let i = 0; i < n; i++) {
    const [name, phone] = readLine().split(" ");
    phoneBook[name] = phone;
  }

  // continuously read names from input
  // and print out the corresponding phone numbers until there is no more input
  while (true) {
    const name = readLine();
    if (!name) {
      // if no more input, break out of the loop
      break;
    }
    if (name in phoneBook) {
      // if name is in phone book, print name=phone
      console.log(`${name}=${phoneBook[name]}`);
    } else {
      // if name is not in the phone book, print "Not found"
      console.log("Not found");
    }
  }
}
