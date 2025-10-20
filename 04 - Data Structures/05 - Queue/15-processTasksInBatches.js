// 15. Implement a function to process tasks in batches using a queue.

import Queue from "./03-implementUsingLinkedList.js";

const batches = new Queue();
function tasks(process) {
  batches.enqueue(process);
}

function execute() {
  if (batches.isEmpty()) return null;
  const process = batches.dequeue();
  console.log(`Executing... ${process}`);
}

tasks("Printing...");
tasks("Downloading...");
tasks("Uploading...");
execute();
execute();
execute();
