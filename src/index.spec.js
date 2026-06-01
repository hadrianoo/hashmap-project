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
    expect(hashMap.buckets.length).toEqual(1);
    expect(hashMap.buckets[index]).toEqual({ one: 1 });
  });
});
