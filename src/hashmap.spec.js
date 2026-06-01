import { HashMap } from "./hashmap.js";
let hashMap = null;
beforeEach(() => {
  hashMap = new HashMap();
  hashMap.set("one", 1);
  hashMap.set("one", 2);
  hashMap.set("Rama", 22);
  hashMap.set("Sita", 33);
  hashMap.set("bamboo", 44);
});
afterEach(() => {
  hashMap = null;
});
describe("test hash method", () => {
  test("is hash less than 16", () => {
    expect(hashMap.hash("bcvbbbb")).toBeLessThan(16);
  });
});

describe("test set method", () => {
  test("set key:Sita value:33 key:Rama value:22 ", () => {
    const index = hashMap.hash("Rama");
    expect(hashMap.buckets[index].at(0)).toEqual({ Sita: 33 });
    expect(hashMap.buckets[index].at(1)).toEqual({ Rama: 22 });
    expect(hashMap.buckets[index].size()).toEqual(2);
  });
});

describe("test get method", () => {
  test("return value of a key -> 2", () => {
    expect(hashMap.get("one")).toEqual(2);
  });
  test("if there is no key", () => {
    expect(hashMap.get("onee")).toEqual(null);
  });
  test("if there is two keys in list", () => {
    expect(hashMap.get("Rama")).toEqual(22);
    expect(hashMap.get("Sita")).toEqual(33);
  });
});

describe("test has method", () => {
  test("return true if key exist", () => {
    expect(hashMap.has("one")).toEqual(true);
  });
  test("return false if key does not exist", () => {
    expect(hashMap.has("onee")).toEqual(false);
  });
});
describe("test remove method", () => {
  test("wrong key", () => {
    expect(hashMap.remove("bambooo")).toEqual(false);
  });
  test("remove key from map", () => {
    const index = hashMap.hash("bamboo");
    expect(hashMap.remove("bamboo")).toEqual(true);
    expect(hashMap.buckets[index].size()).toEqual(0);
  });
  test("remove key from map when there is 2 keys in bucket", () => {
    const index = hashMap.hash("Sita");
    expect(hashMap.remove("Sita")).toEqual(true);
    expect(hashMap.buckets[index].at(0)).toEqual({ Rama: 22 });
    expect(hashMap.buckets[index].size()).toEqual(1);
  });
});
describe("test length method", () => {
  test("length of hash map", () => {
    hashMap.set("Rama", 55);
    expect(hashMap.length()).toEqual(4);
  });
});
