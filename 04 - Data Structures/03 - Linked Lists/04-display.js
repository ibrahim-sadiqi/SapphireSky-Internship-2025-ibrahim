import LinkedList from "./linkedList.js";

// 4. Write a function to traverse and print a linked list.
LinkedList.prototype.display = function (dir = 1) {
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
};

const list = new LinkedList();
list.push(1);
list.push(2);
list.display();
