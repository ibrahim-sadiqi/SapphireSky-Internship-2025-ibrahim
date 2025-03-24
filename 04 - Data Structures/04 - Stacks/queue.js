class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let item = this.first;
    this.first = this.first.next;
    if (this.first === null) this.last = null;
    this.size--;
    return item;
  }

  peek() {
    return this.first;
  }

  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.first === null;
  }

  print() {
    let current = this.first;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

export default Queue;
