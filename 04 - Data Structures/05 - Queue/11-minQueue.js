// 11. How do you design a queue that supports enqueue(), dequeue(), and getMin() in constant time?

class MinQueue {
  constructor() {
    this.items = [];
    this.min = [];
  }

  enqueue(val) {
    this.items.push(val);
    if (this.min[this.min.length - 1] > val && this.min.length > 0)
      this.min.pop();
    this.min.push(val);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let rm = this.items.shift();
    if (this.min[0] === rm) this.min.shift();
    return rm;
  }

  getMin() {
    console.log(this.min);
    return this.min.length > 0 ? this.min[0] : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const q = new MinQueue();
q.enqueue(1);
q.enqueue(4);
q.enqueue(-1);
q.enqueue(6);
q.enqueue(0);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.getMin());
