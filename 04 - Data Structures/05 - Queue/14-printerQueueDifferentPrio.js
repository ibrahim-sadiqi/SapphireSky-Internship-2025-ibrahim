// 14. Write a function to simulate a printer queue with different priorities.
import MultiLevelQueue from "./13-multi-levelQueueDifferentPriorities.js";

const q = new MultiLevelQueue();

function printer(doc, priority) {
  q.enqueue(priority, doc);
}

function print() {
  const doc = q.dequeue();
  if (doc) console.log(`Printing: ${doc}`);
  else console.log("No documents in the queue!");
}

printer("Document A", 3);
printer("Document B", 1);
printer("Document C", 2);

print();
print();
print();
