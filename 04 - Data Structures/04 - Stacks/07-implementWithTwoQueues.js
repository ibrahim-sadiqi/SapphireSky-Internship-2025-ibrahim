// 7. How do you implement a stack with two queues?

import Queue from "./queue.js";

class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  push(value) {
    this.q2.enqueue(value);
    let current = this.q1.peek();
    while (current) {
      this.q2.enqueue(this.q1.dequeue().value);
      current = current.next;
    }
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.q1.dequeue().value;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.q1.peek().value;
  }

  isEmpty() {
    return this.q1.isEmpty();
  }

  size() {
    return this.q1.size();
  }

  print() {
    this.q1.print();
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek());
console.log(s.pop());
s.print();
