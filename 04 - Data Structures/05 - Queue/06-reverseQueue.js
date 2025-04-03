// 6. Implement a function to reverse a queue.

import Queue from "./02-implementQueueUsingArray.js";

function reversQueue(q) {
  const stack = [];
  while (!q.isEmpty()) {
    stack.push(q.dequeue());
  }

  let size = stack.length;
  for (let i = 0; i < size; i++) {
    q.enqueue(stack.pop());
  }
  return q;
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.print();
reversQueue(q);
q.print();
