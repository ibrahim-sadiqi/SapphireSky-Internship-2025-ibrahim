import LinkedList from "./linkedList.js";

// 9. Write a function to merge two sorted linked lists.
LinkedList.prototype.mergeTwoSorted = function (link2) {
  if (this.isEmpty()) return link2;
  if (link2.isEmpty()) return this;
  const sorted = new LinkedList();

  if (this.first.data >= link2.last.data) {
    sorted.first = link2.first;
    link2.last.next = this.first;
    this.first.prev = link2.last;
    sorted.last = this.last;
    return sorted;
  } else if (this.last.data <= link2.first.data) {
    sorted.first = this.first;
    this.last.next = link2.first;
    link2.first.prev = this.last;
    sorted.last = link2.last;
    return sorted;
  }

  let firstPtr = this.first;
  let secondPtr = link2.first;
  let dummy = new Node(0);
  let current = dummy;

  while (firstPtr !== null && secondPtr !== null) {
    if (secondPtr.data <= firstPtr.data) {
      current.next = secondPtr;
      secondPtr.prev = current;
      secondPtr = secondPtr.next;
    } else {
      current.next = firstPtr;
      firstPtr.prev = current;
      firstPtr = firstPtr.next;
    }
    current = current.next;
  }

  if (firstPtr !== null) {
    current.next = firstPtr;
    firstPtr.prev = current;
  } else {
    current.next = secondPtr;
    secondPtr.prev = current;
  }
  sorted.first = dummy.next;
  sorted.first.prev = null;
  sorted.last = this.last.data > link2.last.data ? this.last : link2.last;

  return sorted;
};
