// 3. How do you implement a queue using a linked list?

import LinkedList from "./linkedList.js";
class Queue {
  /*
    Implementation of queue using double linked list is more efficient
    than array.
    enqueue() is Q(1)
    dequeue() is Q(1)
    
    */
  constructor() {
    this.size = 0;
    this.lst = new LinkedList();
  }

  enqueue(value) {
    this.lst.push(value);
    this.size++;
  }

  dequeue() {
    this.size--;
    return this.lst.deleteFirst().value;
  }

  size() {
    return this.size;
  }

  peek() {
    return this.lst.getFirst().value;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let current = this.lst.getFirst();
    let result = "";
    while (current) {
      result += current.value + " --> ";
      current = current.next;
    }
    console.log(result);
  }
}

export default Queue;
