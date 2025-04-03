// 5. Write a function to check if a queue is empty.

import Queue from "./02-implementQueueUsingArray.js";

function checkEmpty(q) {
  return q.isEmpty();
}

const q = new Queue();
q.enqueue(1);
console.log(checkEmpty(q));
