import { HashMap } from "./index.js";
let hashMap = null;
beforeEach(() => {
  hashMap = new HashMap();
});
describe("test hash method", () => {
  test("is hash less than 16", () => {
    expect(hashMap.hash("bcvbbbb")).toBeLessThan(16);
  });
});

describe("test set method", () => {
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
  test("set key:oneqwe value:4", () => {
    hashMap.set("one", 1);
    hashMap.set("one", 2);
    hashMap.set("Rama", 22);
    hashMap.set("Sita", 33);
    const index = hashMap.hash("Rama");
    expect(hashMap.buckets[index].at(0)).toEqual({ Sita: 33 });
    expect(hashMap.buckets[index].at(1)).toEqual({ Rama: 22 });
    expect(hashMap.buckets[index].size()).toEqual(2);
  });
});

describe("test get method", () => {
  test("return value of a key -> 2", () => {
    hashMap.set("one", 1);
    hashMap.set("oneeeeeewwee", 2);
    expect(hashMap.get("oneeeeeewwee")).toEqual(2);
  });
  test("if there is no key", () => {
    hashMap.set("one", 1);
    hashMap.set("oneeeeeewwee", 2);
    expect(hashMap.get("oneeeeeew")).toEqual(null);
  });
  test("if there is two keys in list", () => {
    hashMap.set("one", 1);
    hashMap.set("oneeeeeewwee", 2);
    hashMap.set("Rama", 22);
    hashMap.set("Sita", 33);
    expect(hashMap.get("Rama")).toEqual(22);
    expect(hashMap.get("Sita")).toEqual(33);
  });
});
