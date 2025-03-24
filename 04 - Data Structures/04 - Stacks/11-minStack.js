// 11. How do you design a stack that supports push(), pop(), and getMin() in constant time?

class MinStack {
  constructor() {
    this.stackArray = [];
    this.min = [];
  }

  getMin() {
    if (this.stackArray.length === 0) return "Stack is Empty";
    return this.min[this.min.length - 1];
  }

  push(value) {
    this.stackArray.push(value);
    if (this.min.length === 0 || value <= this.getMin()) this.min.push(value);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    let rmValue = this.stackArray.pop();
    if (rmValue === this.getMin()) this.min.pop();
    return rmValue;
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

const s = new MinStack();
s.push(10);
s.push(10);
s.push(69);
s.push(5);
s.push(3);
s.push(1);
s.push(11);
s.push(6);
