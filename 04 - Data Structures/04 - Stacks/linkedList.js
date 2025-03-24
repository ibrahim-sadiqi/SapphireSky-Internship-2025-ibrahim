class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      newNode.next = null;
      this.first = newNode;
      this.last = this.first;
    } else {
      let current = this.last;
      newNode.next = null;
      newNode.prev = current;
      current.next = newNode;
      this.last = newNode;
    }
  }

  pop() {
    let temp = this.last;
    let prev = this.last.prev;
    prev.next = null;
    this.last = prev;
    return temp;
  }

  isEmpty() {
    return this.first === null;
  }
}

export default LinkedList;
