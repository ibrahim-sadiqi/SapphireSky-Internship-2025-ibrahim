import LinkedList from "./linkedList.js";

// 13. Write a function to find the starting point of a cycle in a linked list.
LinkedList.prototype.findCycleStartingPoint = function () {
  // const map = new Map();
  // let current = this.first;
  // while (current) {
  //   if (map.has(current)) {
  //     return current;
  //   } else {
  //     map.set(current, true);
  //     current = current.next;
  //   }
  // }
  // return null;

  /*
    Floyd’s cycle-finding algorithm
    */
  if (this.isEmpty()) return null;
  let slowPtr = this.first;
  let fastPtr = this.first;
  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) break;
  }
  if (!fastPtr || !fastPtr.next) return null;

  slowPtr = link.first;

  while (slowPtr !== fastPtr) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }
  return slowPtr;
};
