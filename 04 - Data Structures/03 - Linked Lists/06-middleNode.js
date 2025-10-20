import LinkedList from "./linkedList.js";

// 6. Write a function to find the middle node of a linked list.
LinkedList.prototype.getMiddleNode = function () {
  if (this.isEmpty()) return null;

  /* Here I used "this.counter" which  is more efficeint.
    And loop just traverse until middle of linked list is efficient.

    const middle = Math.trunc(this.size() / 2);
    let current = this.first;

    let count = 0;
    while (count !== middle) {
      current = current.next;
      count++;
    }
    */

  // Floyd’s Tortoise and Hare Algorithm (Two-Pointer Technique)
  // But this algotithm is more efficient in case how we impelemented the size method.
  let slow = this.first;
  let fast = this.first;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
};
