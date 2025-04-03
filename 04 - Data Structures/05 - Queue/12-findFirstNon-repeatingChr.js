// 12. Implement a function to find the first non-repeating
//  character in a stream of characters using a queue.

import Queue from "./03-implementUsingLinkedList.js";

const nonRepearingStream = function (str) {
  let rs = str.replace(/\s+/g, "");
  const map = new Map();
  const queue = new Queue();
  for (const c of rs) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else {
      map.set(c, 1);
      queue.enqueue(c);
    }
    if (map.get(queue.peek()) > 1) queue.dequeue();
  }
  return queue.peek();
};

const str = "adbadbc";
console.log(nonRepearingStream(str));
