// 11. How do you design a stack that supports push(), pop(), and getMin() in constant time?

class Stack {
  constructor() {
    this.stackArray = [];
    this.min;
  }

  getMin() {
    return this.min;
  }

  push(value) {
    if (this.isEmpty()) this.min = value;
    if (this.min > value) this.min = value;
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
    console.log(this.stackArray.join(" -> "));
  }
}

const s = new Stack();
s.push(10);
s.push(5);
s.push(3);
s.push(-1);
s.push(1);
s.push(11);
s.push(6);
s.print();
console.log(s.getMin());
