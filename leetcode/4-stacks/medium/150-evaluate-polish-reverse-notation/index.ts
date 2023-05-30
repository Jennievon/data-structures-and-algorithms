function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  // loop through each token to evaluate the expression - operator or operand
  for (const token of tokens) {
    // if token is an operator, pop the last two operands from the stack and perform the operation
    if (isOperator(token)) {
      const operand2 = stack.pop()!;
      const operand1 = stack.pop()!;
      // push the result back to the stack
      const result = calculate(token, operand1, operand2);
      stack.push(result);
    } else {
      // if token is an operand, push it to the stack
      stack.push(parseInt(token, 10));
    }
  }

  return stack[0];
}

function isOperator(token: string): boolean {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

function calculate(
  operator: string,
  operand1: number,
  operand2: number
): number {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      // Math.trunc() is used to remove the decimal part of the result, e.g. 5 / 2 = 2.5 => 2
      return Math.trunc(operand1 / operand2);
    default:
      return 0;
  }
}
