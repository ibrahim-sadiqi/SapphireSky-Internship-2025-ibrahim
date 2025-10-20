import LinkedList from "./linkedList.js";

// 10. How do you find the nth node from the end of a linked list?
LinkedList.prototype.getNth = function (n) {
  /*
    Here, I used this.counter to determine the size.
    It doesn't require additional time to find it.
    However, if we use a traversal algorithm to check the size,
    it is not efficient because each time it checks, it requires O(n) time complexity.
    */
  if (n > this.size() || n <= 0) return null;
  if (this.isEmpty()) return;
  let current = this.last;
  let count = 1;
  while (current) {
    if (count === Number(n)) return current.data;
    current = current.prev;
    count++;
  }
  return null;
};
