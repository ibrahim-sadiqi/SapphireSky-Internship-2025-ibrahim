// 14. Implement a function to group even and odd nodes together in a linked list.

import LinkedList from "./linkedList.js";

LinkedList.prototype.makeGroupEvenOdd = function () {
  if (this.isEmpty()) return null;
  let evenHead = null,
    evenTail = null;
  let oddHead = null,
    oddTail = null;
  let current = this.first;

  while (current) {
    const nextNode = current.next;
    current.next = null;
    current.prev = null;

    if (current.data % 2 === 0) {
      if (!evenHead) {
        evenHead = current;
        evenTail = current;
      } else {
        evenTail.next = current;
        current.prev = evenTail;
        evenTail = current;
      }
    } else {
      if (!oddHead) {
        oddHead = current;
        oddTail = current;
      } else {
        oddTail.next = current;
        current.prev = oddTail;
        oddTail = current;
      }
    }

    current = nextNode;
  }

  if (evenHead && oddHead) {
    evenTail.next = oddHead;
    oddHead.prev = evenTail;
    this.first = evenHead;
    this.last = oddTail;
  } else if (evenHead) {
    this.first = evenHead;
    this.last = evenTail;
  } else {
    this.first = oddHead;
    this.last = oddTail;
  }

  return this;
};
