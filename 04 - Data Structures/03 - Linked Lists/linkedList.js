class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this._counter = 0;
  }

  push(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      newNode.next = null;
      this.first = newNode;
      this.last = this.first;
    } else {
      let current = this.last;
      newNode.next = null;
      newNode.prev = current;
      current.next = newNode;
      this.last = newNode;
    }
    this._counter++;
  }

  // .2 Implement a function to insert a node at the beginning of a linked list.
  insertFirst(data) {
    let newNode = new Node(data);
    if (!this.isEmpty()) {
      newNode.next = this.first;
      this.first.prev = newNode;
      this.first = newNode;
    } else {
      newNode.next = null;
      this.first = newNode;
      this.last = this.first;
    }
    this._counter++;
  }

  // 3. How do you delete a node from a linked list?
  delete(item) {
    /*It deletes an item based on a specific value, and if no value is provided,
    it will delete the last item.
    */
    if (this.isEmpty()) return null;
    let current = this.first;
    let temp;
    if (current.data === item) {
      temp = current.data;
      this.first = current.next;
      if (this.isEmpty()) this.last = this.first;
      this._counter--;
      return temp;
    }
    if (this.last.data === item || !item) {
      temp = this.last.data;
      let prev = this.last.prev;
      prev.next = null;
      this.last = prev;
      this._counter--;
      return temp;
    }

    while (current.next) {
      if (current.data === item) {
        temp = current.data;
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this._counter--;
        return temp;
      }
      current = current.next;
    }
    return null;
  }

  isEmpty() {
    return this.first === null;
  }

  // 4. Write a function to traverse and print a linked list.
  display(dir = 1) {
    if (this.isEmpty()) {
      console.log("Linked list is empty!");
      return;
    }

    let result = "";
    if (Number(dir) === 1) {
      let current = this.first;
      while (current) {
        result += current.data + " --> ";
        current = current.next;
      }
      console.log(result);
    } else if (Number(dir) === -1) {
      let current = this.last;
      while (current) {
        result += current.data + " --> ";
        current = current.prev;
      }
      console.log(result);
    }
  }

  // 5. Implement a function to find the length of a linked list.
  size() {
    return this._counter;
    // let current = this.first;
    // let count = 0;
    // while (current) {
    //   current = current.next;
    //   count++;
    // }
    // return count;
  }

  // 6. Write a function to find the middle node of a linked list.
  getMiddleNode() {
    if (this.isEmpty()) return null;

    /* Here I used "this.counter" which  is more efficeint.
    And loop just traverse until middle of linked list is efficient.

    const middle = Math.trunc(this.size() / 2);
    let current = this.first;

    let count = 0;
    while (count !== middle) {
      current = current.next;
      count++;
    }
    */

    // Floyd’s Tortoise and Hare Algorithm (Two-Pointer Technique)
    // But this algotithm is more efficient in case how we impelemented the size method.
    let slow = this.first;
    let fast = this.first;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data;
  }

  // 7. Implement a function to reverse a linked list.
  reverse() {
    if (this.isEmpty()) return;
    let prev = null;
    let curr = this.first;
    let lstNode = this.first;
    let next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    this.first = prev;
    this.last = lstNode;
  }

  // 8. How do you detect a cycle in a linked list?
  isCycle() {
    /*
    Floyd’s cycle-finding algorithm
    */
    if (this.isEmpty()) return;
    let slowPtr = this.first;
    let fastPtr = this.first;
    while (fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if (slowPtr === fastPtr) return true;
    }
    if (!fastPtr || !fastPtr.next) return false;
  }

  // 9. Write a function to merge two sorted linked lists.
  mergeTwoSorted(link2) {
    if (this.isEmpty()) return link2;
    if (link2.isEmpty()) return this;
    const sorted = new LinkedList();

    if (this.first.data >= link2.last.data) {
      sorted.first = link2.first;
      link2.last.next = this.first;
      this.first.prev = link2.last;
      sorted.last = this.last;
      return sorted;
    } else if (this.last.data <= link2.first.data) {
      sorted.first = this.first;
      this.last.next = link2.first;
      link2.first.prev = this.last;
      sorted.last = link2.last;
      return sorted;
    }

    let firstPtr = this.first;
    let secondPtr = link2.first;
    let dummy = new Node(0);
    let current = dummy;

    while (firstPtr !== null && secondPtr !== null) {
      if (secondPtr.data <= firstPtr.data) {
        current.next = secondPtr;
        secondPtr.prev = current;
        secondPtr = secondPtr.next;
      } else {
        current.next = firstPtr;
        firstPtr.prev = current;
        firstPtr = firstPtr.next;
      }
      current = current.next;
    }

    if (firstPtr !== null) {
      current.next = firstPtr;
      firstPtr.prev = current;
    } else {
      current.next = secondPtr;
      secondPtr.prev = current;
    }
    sorted.first = dummy.next;
    sorted.first.prev = null;
    sorted.last = this.last.data > link2.last.data ? this.last : link2.last;

    return sorted;
  }

  // 10. How do you find the nth node from the end of a linked list?
  getNth(n) {
    /*
    Here, I used this.counter to determine the size.
    It doesn't require additional time to find it.
    However, if we use a traversal algorithm to check the size,
    it is not efficient because each time it checks, it requires O(n) time complexity.
    */
    if (n > this.size() || n <= 0) return null;
    if (this.isEmpty()) return;
    let current = this.last;
    let count = 1;
    while (current) {
      if (count === Number(n)) return current.data;
      current = current.prev;
      count++;
    }
    return null;
  }

  // 11. Implement a function to remove duplicates from a linked list.
  removeDuplicates() {
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
  }

  // 12. How do you check if two linked lists intersect?
  intersect(link) {
    const unique = new Set();
    const intersect = new Set();
    let startItem = this.first;
    while (startItem) {
      unique.add(startItem);
      startItem = startItem.next;
    }
    let startItem2 = link.first;
    while (startItem2) {
      if (unique.has(startItem2)) intersect.add(startItem2);
      startItem2 = startItem2.next;
    }
    return intersect;
  }

  // 13. Write a function to find the starting point of a cycle in a linked list.
  findCycleStartingPoint() {
    // const map = new Map();
    // let current = this.first;
    // while (current) {
    //   if (map.has(current)) {
    //     return current;
    //   } else {
    //     map.set(current, true);
    //     current = current.next;
    //   }
    // }
    // return null;

    /*
    Floyd’s cycle-finding algorithm
    */
    if (this.isEmpty()) return null;
    let slowPtr = this.first;
    let fastPtr = this.first;
    while (fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if (slowPtr === fastPtr) break;
    }
    if (!fastPtr || !fastPtr.next) return null;

    slowPtr = link.first;

    while (slowPtr !== fastPtr) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }
    return slowPtr;
  }

  // 14. Implement a function to group even and odd nodes together in a linked list.

  makeGroupEvenOdd() {
    if (this.isEmpty()) return null;
    let evenHead = null,
      evenTail = null;
    let oddHead = null,
      oddTail = null;
    let current = this.first;

    while (current) {
      const nextNode = current.next;
      current.next = null;
      current.prev = null;

      if (current.data % 2 === 0) {
        if (!evenHead) {
          evenHead = current;
          evenTail = current;
        } else {
          evenTail.next = current;
          current.prev = evenTail;
          evenTail = current;
        }
      } else {
        if (!oddHead) {
          oddHead = current;
          oddTail = current;
        } else {
          oddTail.next = current;
          current.prev = oddTail;
          oddTail = current;
        }
      }

      current = nextNode;
    }

    if (evenHead && oddHead) {
      evenTail.next = oddHead;
      oddHead.prev = evenTail;
      this.first = evenHead;
      this.last = oddTail;
    } else if (evenHead) {
      this.first = evenHead;
      this.last = evenTail;
    } else {
      this.first = oddHead;
      this.last = oddTail;
    }

    return this;
  }
  // 15. Write a function to add two numbers represented as linked lists.

  addTwoList(lst) {
    let firstLst = this.first;
    let secondLst = lst.first;

    let firstDigits = "";
    let secondDigites = "";
    while (firstLst) {
      firstDigits += firstLst.data;
      firstLst = firstLst.next;
    }

    while (secondLst) {
      secondDigites += secondLst.data;
      secondLst = secondLst.next;
    }

    let sum = Number(firstDigits) + Number(secondDigites);
    const total = new LinkedList();
    sum = String(sum);
    for (let i = 0; i < sum.length; i++) {
      if (sum[i] === "-") {
        total.push(Number(sum[i] + sum[i + 1]));
        i++;
      } else {
        total.push(Number(sum[i]));
      }
    }
    return total;
  }
}

export default LinkedList;

const link = new LinkedList();

link.push(2);
link.push(1);
link.push(1);

const link2 = new LinkedList();

link2.push(-1);
link2.push(1);
link2.push(1);

const sum = link.addTwoList(link2);
sum.display();
