import { LinkedList } from "./linked-list.js";

class HashMap {
  loadFactor = 0.75;
  capacity = 16;
  constructor() {
    this.buckets = [];
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
    const hashKey = this.hash(key);
    if (!this.buckets[hashKey]) {
      this.buckets[hashKey] = LinkedList();
    } else if (this.buckets[hashKey].containsKey(key)) {
      const index = this.buckets[hashKey].findIndex(key);
      this.buckets[hashKey].removeAt(index);
    }
    this.buckets[hashKey].prepend({ [key]: value });
    console.log(key, value);
  }
}

export { HashMap };
