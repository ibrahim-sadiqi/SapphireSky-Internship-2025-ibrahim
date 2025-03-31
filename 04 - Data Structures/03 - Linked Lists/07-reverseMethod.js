import LinkedList from "./linkedList.js";
// 7. Implement a function to reverse a linked list.
LinkedList.prototype.reverse = function () {
  if (this.isEmpty()) return;
  let prev = null;
  let curr = this.first;
  let lstNode = this.first;
  let next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    curr.prev = next;
    prev = curr;
    curr = next;
  }
  this.first = prev;
  this.last = lstNode;
};
