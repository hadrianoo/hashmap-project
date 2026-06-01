import { HashMap } from "./index.js";

describe("first tests", () => {
  const hashMap = new HashMap();

  test("is hash less than 16", () => {
    expect(hashMap.hash("asdf")).toBeLessThan(16);
  });
});
