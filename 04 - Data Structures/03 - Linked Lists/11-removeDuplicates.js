import LinkedList from "./linkedList.js";

// 11. Implement a function to remove duplicates from a linked list.
LinkedList.prototype.removeDuplicates = function () {
  if (this.isEmpty()) return;
  const set = new Set();
  let current = this.first;
  while (current) {
    if (set.has(current.data)) {
      let prev = current.prev;
      let next = current.next;

      if (prev) prev.next = next;
      if (next) next.prev = prev;

      if (current === this.first) this.first = next;
      if (current === this.last) this.last = prev;
    } else {
      set.add(current.data);
    }
    current = current.next;
  }
};
