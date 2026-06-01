import { HashMap } from "./hashmap.js";
let hashMap = null;
beforeEach(() => {
  hashMap = new HashMap();
  hashMap.set("one", 1);
  hashMap.set("one", 2);
  hashMap.set("Rama", 22);
  hashMap.set("Sita", 33);
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
