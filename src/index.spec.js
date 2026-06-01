import { HashMap } from "./index.js";

describe("test hash method", () => {
  const hashMap = new HashMap();

  test("is hash less than 16", () => {
    expect(hashMap.hash("bcvbbbb")).toBeLessThan(16);
  });
});

describe("test set method", () => {
  const hashMap = new HashMap();
  test("set key:one value:1", () => {
    hashMap.set("one", 1);
    const index = hashMap.hash("one");
    expect(hashMap.buckets[index].head()).toEqual({ one: 1 });
    expect(hashMap.buckets[index].size()).toEqual(1);
  });
  test("set key:one value:2", () => {
    hashMap.set("one", 1);
    hashMap.set("one", 2);
    const index = hashMap.hash("one");
    expect(hashMap.buckets[index].head()).toEqual({ one: 2 });
    expect(hashMap.buckets[index].size()).toEqual(1);
  });
});
