// 3. How do you implement a stack using a linked list?

import LinkedList from "./linkedList.js";

class Stack {
  constructor() {
    this.item = new LinkedList();
    this.size = 0;
  }

  push(value) {
    this.item.push(value);
    this.size++;
  }

  pop() {
    this.size--;
    return this.item.pop().value;
  }

  size() {
    return this.size;
  }

  peek() {
    return this.item.last.value;
  }

  print() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    let result = "";

    let current = this.item.first;
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result);
  }
  isEmpty() {
    return this.size === 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.print();
s.pop();
s.print();
console.log(s.peek());
