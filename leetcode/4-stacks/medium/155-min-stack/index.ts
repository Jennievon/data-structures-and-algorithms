class MinStack {
  // we can use two stacks
  // one to store the values
  // one to store the minimum values
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    // if minStack is empty, push the value
    // or the value is less than or equal to the last element in minStack, push the value
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const value = this.stack.pop();
    // if the value is the same as the last element in minStack, pop it
    if (value === this.getMin()) {
      this.minStack.pop();
    }
  }

  top(): number {
    // stacks work on a LIFO basis, so the last element is the top
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    // this.minStack is a stack of minimum values, so the last element is the minimum
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
