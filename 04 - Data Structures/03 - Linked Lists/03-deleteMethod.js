import LinkedList from "./linkedList.js";

// 3. How do you delete a node from a linked list?
LinkedList.prototype.delete = function (item) {
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
};
