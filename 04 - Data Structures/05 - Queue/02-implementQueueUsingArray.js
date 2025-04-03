// 2. Implement a queue using an array in JavaScript.

class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(value) {
    this.item.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.item.shift();
  }

  size() {
    return this.item.length;
  }

  peek() {
    return this.item[0];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  print() {
    console.log(this.item.join(" --> "));
  }
}

export default Queue;
