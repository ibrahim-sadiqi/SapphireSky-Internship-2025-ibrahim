// 09.Implement a circular queue and explain how it works.

/* A circular queue is similar to a linear queue in that it follows the FIFO (First In, First Out)
principle.However, unlike a linear queue, the last position in a circular queue is connected to the
first position, forming a loop.This design helps prevent memory wastage by allowing new elements
to be enqueued at the beginning once space becomes available after dequeuing.
If the queue is full and an element is removed, the next enqueued value can be placed
in the first available position, making the queue function like a continuous cycle.
*/

class CircularQueue {
  #size = 0;
  #items;
  #front = -1;
  #rear = -1;
  #curSize = 0;
  constructor(size) {
    this.#size = size;
    this.#items = new Array(size);
  }

  enqueue(val) {
    if (this.isFull()) return "Operation failed, queue is full!";
    if (this.#front === -1) {
      this.#front = this.#rear = 0;
      this.#items[this.#rear] = val;
    } else {
      this.#rear = (this.#rear + 1) % this.#size;
      this.#items[this.#rear] = val;
    }
    this.#curSize++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.#front === this.#rear) {
      const temp = this.#items[this.#front];
      this.#front = this.#rear = -1;
      this.#curSize--;
      return temp;
    } else {
      const temp = this.#items[this.#front];
      this.#front = (this.#front + 1) % this.#size;
      this.#curSize--;
      return temp;
    }
  }

  isEmpty() {
    return this.#front === -1;
  }

  isFull() {
    return (
      (this.#front === 0 && this.#rear === this.#size - 1) ||
      this.#front === this.#rear + 1
    );
  }

  size() {
    return this.#curSize;
  }

  front() {
    return this.#items[this.#front];
  }

  rear() {
    return this.#items[this.#rear];
  }
}

const q = new CircularQueue(4);
q.enqueue(1);
q.enqueue(2);
q.enqueue(7);
q.dequeue();

q.size();
q.print();
