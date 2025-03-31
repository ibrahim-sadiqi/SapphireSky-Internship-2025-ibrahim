class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this._counter = 0;
  }

  push(data) {
    let newNode = new Node(data);
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
    this._counter++;
  }

  isEmpty() {
    return this.first === null;
  }
}
export default LinkedList;
