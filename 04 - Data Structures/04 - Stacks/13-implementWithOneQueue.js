// 13. How do you implement a stack using only one queue?

import Queue from "./queue.js";
class Stack {
  constructor() {
    this.q = new Queue();
  }

  push(value) {
    let size = this.size();
    this.q.enqueue(value);
    let i = 0;
    while (i < size) {
      let firstItem = this.q.dequeue();
      this.q.enqueue(firstItem.value);
      i++;
    }
  }

  peek() {
    return this.q.peek();
  }

  pop() {
    return this.q.dequeue().value;
  }

  size() {
    return this.q.getSize();
  }

  print() {
    this.q.print();
  }

  isEmpty() {
    this.q.size() === 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
//console.log(s.pop());
s.print();
