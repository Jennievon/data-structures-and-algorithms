function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketPairs: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    // If bracket is an opening bracket, push its closing bracket to the stack
    if (bracketPairs[bracket]) {
      // check if bracket is a key in bracketPairs
      stack.push(bracketPairs[bracket]);
    } else {
      // If bracket is a closing bracket, pop the stack and compare it to the bracket
      if (stack.pop() !== bracket) {
        // check if the popped bracket is the same as the current bracket
        return false;
      }
    }
  }

  return stack.length === 0;
}
