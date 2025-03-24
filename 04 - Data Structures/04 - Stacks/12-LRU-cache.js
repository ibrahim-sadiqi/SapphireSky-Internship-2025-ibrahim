// 12. Implement an LRU (Least Recently Used) cache using a stack.

import Stack from "./02-implementUsingArray.js";

class LRUCache {
  constructor(size) {
    this.size = size;
    this.cache = new Stack();
  }

  isEmpty() {
    return this.cache.isEmpty();
  }

  isFull() {
    return this.cache.size() === this.size;
  }

  put(key, value) {
    if (!this.isEmpty())
      for (let i = 0; i < this.cache.size(); i++) {
        if (this.cache.stackArray[i].has(key)) {
          this.cache.stackArray.splice(i, 1);
          break;
        }
      }

    if (!this.isFull()) {
      this.cache.push(new Map().set(key, value));
    } else {
      this.cache.stackArray.shift();
      this.cache.push(new Map().set(key, value));
    }
  }

  get(key) {
    if (this.isEmpty()) return -1;
    for (let i = 0; i < this.cache.size(); i++) {
      if (this.cache.stackArray[i].has(key)) {
        let temp = this.cache.stackArray[i];
        for (let j = i; j < this.cache.size(); j++)
          this.cache.stackArray[j] = this.cache.stackArray[j + 1];
        this.cache.stackArray[this.size - 1] = temp;
        return temp.get(key);
      }
    }
  }

  print() {
    for (let i = 0; i < this.cache.size(); i++)
      console.log(this.cache.stackArray[i]);
  }
}

class LRUCacheUsingMap {
  /*
    This approach is more efficient which time complexity is Q(1)
    */
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    if (!this.isFull()) this.cache.set(key, value);
    else this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }

  get(key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  isFull() {
    return this.cache.size === this.size;
  }

  print() {
    console.log(this.cache);
  }
}
const cache = new LRUCache(5);
cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
cache.put(4, "D");
cache.put(5, "E");
cache.put(2, "Z");
cache.get(3);
cache.print();
// console.log(cache.get(2));
// cache.print();
