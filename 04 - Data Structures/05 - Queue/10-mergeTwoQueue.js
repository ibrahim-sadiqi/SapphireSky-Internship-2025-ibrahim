// 10. Implement a function to merge two queues in an alternating manner.

import Queue from "./02-implementQueueUsingArray.js";

const mergeTwoQueue = function (q1, q2) {
  const mergeQueue = new Queue();
  const remain = function (q) {
    while (!q.isEmpty()) {
      mergeQueue.enqueue(q.dequeue());
    }
  };
  let i = 0;
  while (!q1.isEmpty() && !q2.isEmpty()) {
    if (i % 2 == 0) mergeQueue.enqueue(q1.dequeue());
    else mergeQueue.enqueue(q2.dequeue());
    i++;
  }

  if (!q1.isEmpty()) remain(q1);
  else remain(q2);
  return mergeQueue;
};

const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);

const q2 = new Queue();
q2.enqueue(4);
q2.enqueue(5);
q2.enqueue(5);
q2.enqueue(6);

const merged = mergeTwoQueue(q1, q2);
merged.print();
