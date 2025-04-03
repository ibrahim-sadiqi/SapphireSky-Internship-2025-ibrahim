// 7. How do you implement a queue using two stacks?

class Queue {
  constructor() {
    this.st1 = [];
    this.st2 = [];
  }

  enqueue(value) {
    let size = this.st1.length;
    for (let i = 0; i < size; i++) {
      this.st2.push(this.st1.pop());
    }
    this.st1.push(value);
    this.size2 = this.st2.length;
    for (let i = 0; i < size; i++) {
      this.st1.push(this.st2.pop());
    }
  }

  dequeue() {
    return this.st1.pop();
  }

  front() {
    return this.st1.at(-1);
  }

  size() {
    return this.st1.length;
  }

  print() {
    console.log(this.st1);
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.front());
q.dequeue();
q.print();
