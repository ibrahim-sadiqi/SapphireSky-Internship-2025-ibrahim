// 13. How do you implement a multi-level queue with different priorities?
// A multi-level queue is a data structure that allows for multiple queues, each with its own priority level.
import Queue from "./03-implementUsingLinkedList.js";

class MultiLevelQueue {
  constructor() {
    this.queues = new Map();
  }

  enqueue(priority, element) {
    if (!this.queues.has(priority)) this.queues.set(priority, new Queue());
    this.queues.get(priority).enqueue(element);
  }

  dequeue() {
    if (this.queues.size === 0) return null;

    const highPriority = Math.min(...this.queues.keys());
    const hp = this.queues.get(highPriority);
    const process = this.queues.get(highPriority).dequeue();
    if (hp.isEmpty()) this.queues.delete(highPriority);

    return process;
  }
}

export default MultiLevelQueue;
const mlq = new MultiLevelQueue();
mlq.enqueue(3, 20);
mlq.enqueue(1, 30);
mlq.enqueue(2, 30);
mlq.enqueue(2, 50);
mlq.enqueue(3, 100);
mlq.enqueue(0, 200);
console.log(mlq.dequeue() === 200 ? "Passed✅" : "Faild❌");
console.log(mlq.dequeue() === 30 ? "Passed✅" : "Faild❌");
console.log(mlq.dequeue() === 30 ? "Passed✅" : "Faild❌");
console.log(mlq.dequeue() === 50 ? "Passed✅" : "Faild❌");
console.log(mlq.dequeue() === 20 ? "Passed✅" : "Faild❌");
console.log(mlq.dequeue() === 100 ? "Passed✅" : "Faild❌");
