const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.resultArray = [];
  }

  push(element) {
    this.resultArray.push(element);
  }

  pop() {
    if (this.resultArray.length) {
      const lastElement = this.resultArray[this.resultArray.length - 1];
      this.resultArray.splice(this.resultArray.length - 1, 1);
      return lastElement;
    } else return undefined;
  }

  peek() {
    return this.resultArray[this.resultArray.length - 1];
  }
}

module.exports = {
  Stack
};
