import { LinkedList } from "./linked-list.js";

class HashMap {
  loadFactor = 0.75;
  capacity = 16;
  growthFactor = 2;
  constructor() {
    this.buckets = [];
    this.initiate(this.buckets);
  }

  getCapacity() {
    return this.capacity;
  }
  initiate(map) {
    for (let i = 0; i < this.capacity; i++) {
      map[i] = LinkedList();
    }
  }
  indexOutOfRange(index) {
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
  growth() {
    this.capacity *= this.growthFactor;
    let newBuckets = [];
    this.initiate(newBuckets);
    const oldBucketsEntries = this.entries();
    for (const [key, value] of oldBucketsEntries) {
      const index = this.hash(key);
      newBuckets[index].prepend({ [key]: value });
    }
    this.buckets = newBuckets;
  }
  set(key, value) {
    const index = this.hash(key);
    if (this.indexOutOfRange(index)) this.indexOutOfBounds();
    if (this.buckets[index].containsKey(key)) {
      const toRemoveIndex = this.buckets[index].findIndex(key);
      this.buckets[index].removeAt(toRemoveIndex);
    }
    this.buckets[index].prepend({ [key]: value });
    if (this.length() / this.capacity > this.loadFactor) {
      this.growth();
    }
  }
  get(key) {
    const index = this.hash(key);
    if (this.indexOutOfRange(index)) this.indexOutOfBounds();
    return this.buckets[index].find(key);
  }
  has(key) {
    const index = this.hash(key);
    if (this.indexOutOfRange(index)) this.indexOutOfBounds();
    return this.buckets[index].containsKey(key);
  }
  remove(key) {
    const index = this.hash(key);
    if (this.indexOutOfRange(index)) this.indexOutOfBounds();

    if (this.buckets[index].size() === 1) {
      this.buckets[index] = LinkedList();
      return true;
    } else if (this.buckets[index].size() > 1) {
      const toRemoveIndex = this.buckets[index].findIndex(key);
      this.buckets[index].removeAt(toRemoveIndex);
      return true;
    }
    return false;
  }
  length() {
    let counter = 0;
    for (const bucket of this.buckets) {
      counter += bucket.size();
    }
    return counter;
  }
  clear() {
    this.initiate(this.buckets);
  }
  entries() {
    return this.buckets.reduce((acc, bucket) => {
      if (bucket.size() === 1) {
        acc.push(...Object.entries(bucket.head()));
      }
      if (bucket.size() > 1) {
        bucket.toArray().forEach((item) => {
          acc.push(...Object.entries(item));
        });
      }
      return acc;
    }, []);
  }
  keys() {
    const entriesArray = this.entries();
    if (entriesArray.length === 0) return [];
    return entriesArray.map((item) => item[0]);
  }
  values() {
    const entriesArray = this.entries();
    if (entriesArray.length === 0) return [];
    return entriesArray.map((item) => item[1]);
  }
}

export { HashMap };
