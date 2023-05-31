function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const result: string[] = [];

  function backtrack(open: number, closed: number) {
    if (open === n && closed === n) {
      result.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(")");
      backtrack(open, closed + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return result;
}

// function generateParenthesis(n: number): string[] {
//   const stack: string[] = [];
//   backtrack(stack, "", 0, 0, n);
//   return stack;
// }

// function backtrack(
//   stack: string[],
//   current: string,
//   open: number,
//   close: number,
//   max: number
// ) {
//   // if the current string length is equal to the max * 2, we add the current string to the stack array
//   if (current.length === max * 2) {
//     stack.push(current);
//     return;
//   }
//   // if the open is less than the max, we add an open parenthesis and recursively call backtrack
//   if (open < max) {
//     backtrack(stack, current + "(", open + 1, close, max);
//   }
//   // if the close is less than the open, we add a close parenthesis and recursively call backtrack
//   if (close < open) {
//     backtrack(stack, current + ")", open, close + 1, max);
//   }
// }

//explanation
// to generate all the valid combinations, we use the backtracking algorithm
// because we know that we need to add an open parenthesis before we add a close parenthesis
// we can use the open and close variables to keep track of the number of open and close parenthesis
// we can use the max variable to keep track of the max number of parenthesis
// current is the current string that we are building

// to start, we call backtrack with an empty string, 0 open parenthesis, 0 close parenthesis, and the max number of parenthesis
// we check if the current string length is equal to the max * 2, if it is, we add the current string to the stack array
// if the open is less than the max, we add an open parenthesis and recursively call backtrack
// if the close is less than the open, we add a close parenthesis and recursively call backtrack
// we keep doing this until we have a string that is the max length
// once we have a string that is the max length, we add it to the stack array
// we keep doing this until we have all the valid combinations

// Time Complexity
// O(4^n / sqrt(n)) because we have 4^n / sqrt(n) combinations and we have to validate each one

// function generateParentheses(n: number): string[] {
//   const stack: string[] = [];

//   function generate(left: number, right: number, current: string): void {
//     if (left === 0 && right === 0) {
//       stack.push(current);
//       return;
//     }

//     if (left > 0) {
//       generate(left - 1, right, current + "(");
//     }
//     if (right > left) {
//       generate(left, right - 1, current + ")");
//     }
//   }

//   generate(n, n, "");
//   return stack;
// }

// Explanation
// we can also use the backtracking algorithm to solve this problem
// we can use the left and right variables to keep track of the number of left and right parenthesis
// we can use the current variable to keep track of the current string that we are building

// to start, we call generate with n, n, and an empty string
// we check if the left and right are equal to 0, if they are, we add the current string to the stack array
// if the left is greater than 0, we call generate with left - 1, right, and current + "("
// if the right is greater than left, we call generate with left, right - 1, and current + ")"
// we keep doing this until we have a string that is the max length
// once we have a string that is the max length, we add it to the stack array
// we keep doing this until we have all the valid combinations

// Time Complexity
// O(4^n / sqrt(n)) because we have 4^n / sqrt(n) combinations and we have to validate each one

// Example usage
// const n = 3;
// const combinations = generateParentheses(n);
// console.log(combinations);
