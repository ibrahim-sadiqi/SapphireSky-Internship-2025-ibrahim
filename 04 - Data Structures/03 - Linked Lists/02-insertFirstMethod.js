import LinkedList from "./linkedList.js";

// .2 Implement a function to insert a node at the beginning of a linked list.
LinkedList.prototype.insertFirst = function (data) {
  let newNode = new Node(data);
  if (!this.isEmpty()) {
    newNode.next = this.first;
    this.first.prev = newNode;
    this.first = newNode;
  } else {
    newNode.next = null;
    this.first = newNode;
    this.last = this.first;
  }
  this._counter++;
};
