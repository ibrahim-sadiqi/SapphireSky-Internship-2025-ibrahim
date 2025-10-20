import LinkedList from "./linkedList.js";

// 12. How do you check if two linked lists intersect?
LinkedList.prototype.intersect = function (link) {
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
};
