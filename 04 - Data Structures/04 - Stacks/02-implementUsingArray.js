// 2. Implement a stack using an array in JavaScript.
class Stack {
  constructor() {
    this.stackArray = [];
  }

  push(value) {
    this.stackArray.push(value);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.stackArray.pop();
  }

  size() {
    return this.stackArray.length;
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.stackArray[this.size() - 1];
  }

  isEmpty() {
    return this.stackArray.length === 0;
  }

  print() {
    let result = "";
    for (let i = this.size() - 1; i >= 0; i--) {
      result += this.stackArray[i] + " -> ";
    }
    console.log(result);
  }
}

export default Stack;
