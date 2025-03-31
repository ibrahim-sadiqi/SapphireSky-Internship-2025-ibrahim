import LinkedList from "./linkedList.js";

// 8. How do you detect a cycle in a linked list?
LinkedList.prototype.isCycle = function () {
  /*
  Floyd’s cycle-finding algorithm
  */
  if (this.isEmpty()) return;
  let slowPtr = this.first;
  let fastPtr = this.first;
  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) return true;
  }
  if (!fastPtr || !fastPtr.next) return false;
};
