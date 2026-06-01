import { LinkedList } from "./linked-list.js";

class HashMap {
  loadFactor = 0.75;
  capacity = 16;
  constructor() {
    this.buckets = [];
    this.initiate();
  }
  initiate() {
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = LinkedList();
    }
  }
  outsideIndexRange(index) {
    if (index < 0 || index >= this.capacity) return true;
    return false;
  }
  indexOutOfBounds() {
    throw new Error("Trying to access index out of bounds");
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.capacity;
    }
    return hashCode;
  }
  set(key, value) {
    const index = this.hash(key);
    if (this.outsideIndexRange(index)) this.indexOutOfBounds();
    if (this.buckets[index].containsKey(key)) {
      const listIndex = this.buckets[index].findIndex(key);
      this.buckets[index].removeAt(listIndex);
    }
    this.buckets[index].prepend({ [key]: value });
  }
  get(key) {
    const index = this.hash(key);
    if (this.outsideIndexRange(index)) this.indexOutOfBounds();
    return this.buckets[index].find(key);
  }
  has(key) {
    const index = this.hash(key);
    if (this.outsideIndexRange(index)) this.indexOutOfBounds();
    return this.buckets[index].containsKey(key);
  }
}

export { HashMap };
