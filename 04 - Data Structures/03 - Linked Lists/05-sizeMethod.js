import LinkedList from "./linkedList.js";

// 5. Implement a function to find the length of a linked list.
LinkedList.prototype.size = function () {
  return this._counter;
  // let current = this.first;
  // let count = 0;
  // while (current) {
  //   current = current.next;
  //   count++;
  // }
  // return count;
};
