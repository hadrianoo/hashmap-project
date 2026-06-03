import { LinkedList, Node } from "./linked-list.js";

let newList = null;

beforeEach(() => {
  newList = LinkedList();
});
afterEach(() => {
  newList = null;
});

describe("linked list append function", () => {
  const value = "i am node element";
  let newNode = Node();
  beforeEach(() => {
    newNode.value = "i am first";
    newList.firstNode = newNode;
  });
  afterEach(() => {
    newNode = Node();
  });

  test("append new node to end of the list", () => {
    newList.append(value);
    expect(newList.firstNode.nextNode.value).toEqual("i am node element");
    expect(newList.firstNode.nextNode.nextNode).toEqual(null);
  });
  test("check if append does not remove previous element", () => {
    newList.append(value);
    expect(newList.firstNode.value).toEqual("i am first");
    expect(newList.firstNode.nextNode).not.toEqual(null);
  });
});

describe("linked list previous function", () => {
  const value = "i am node element 1";
  test("append new node as first ele if firstNode is null", () => {
    newList.append(value);
    expect(newList.firstNode.value).toEqual("i am node element 1");
    expect(newList.firstNode.nextNode).toEqual(null);
  });
  test("prepend if firstNode is null", () => {
    newList.prepend(value);
    expect(newList.firstNode.value).toEqual("i am node element 1");
    expect(newList.firstNode.nextNode).toEqual(null);
  });
  test("prepend if firstNode is not null", () => {
    let newNode = Node();
    newNode.value = "i want to be first";
    newList.firstNode = newNode;

    newList.prepend(value);
    expect(newList.firstNode.value).toEqual("i am node element 1");
    expect(newList.firstNode.nextNode).not.toEqual(null);
    expect(newList.firstNode.nextNode.value).toEqual("i want to be first");
  });
});

describe("test list size function", () => {
  test("list size 0", () => {
    expect(newList.size()).toEqual(0);
  });
  test("list size 3", () => {
    let fNode = Node();
    fNode.value = `i am totally first ele now`;
    newList.firstNode = fNode;

    let secondNode = Node();
    secondNode.value = `i am second ele`;
    newList.firstNode.nextNode = secondNode;

    let thirdNode = Node();
    thirdNode.value = `i am third ele`;
    newList.firstNode.nextNode.nextNode = thirdNode;

    expect(newList.size()).toEqual(3);
  });
});

describe("test head function", () => {
  test("if list empty return undefined", () => {
    expect(newList.head()).toEqual(undefined);
  });
  test("return value of first node", () => {
    let fNode = Node();
    fNode.value = `i am totally first ele now`;
    newList.firstNode = fNode;
    expect(newList.head()).toEqual(`i am totally first ele now`);
  });
});

describe("test at function", () => {
  beforeEach(() => {
    let fNode = Node();
    fNode.value = `i am totally index 0 ele now`;
    newList.firstNode = fNode;

    let sNode = Node();
    sNode.value = `i am index 1 ele`;
    newList.firstNode.nextNode = sNode;

    let tNode = Node();
    tNode.value = `i am index 2 ele`;
    newList.firstNode.nextNode.nextNode = tNode;
  });

  test("if there in no node at index return undefined", () => {
    expect(newList.at(3)).toEqual(undefined);
  });
  test("if there in node at index 0 return value", () => {
    expect(newList.at(0)).toEqual(`i am totally index 0 ele now`);
  });

  test("if there in node at index 1 return value", () => {
    expect(newList.at(1)).toEqual(`i am index 1 ele`);
    expect(newList.firstNode.nextNode.value).toEqual(`i am index 1 ele`);
  });
  test("if there in node at index 2 return value", () => {
    expect(newList.at(2)).toEqual(`i am index 2 ele`);
    expect(newList.firstNode.nextNode.nextNode.value).toEqual(
      `i am index 2 ele`,
    );
  });
});

describe("test containsKey function", () => {
  beforeEach(() => {
    let fNode = Node();
    fNode.value = { key: "zero", value: `000` };
    newList.firstNode = fNode;

    let sNode = Node();
    sNode.value = { key: "one", value: `111` };
    newList.firstNode.nextNode = sNode;

    let tNode = Node();
    tNode.value = { key: "two", value: "222" };
    newList.firstNode.nextNode.nextNode = tNode;
  });
  test("return false", () => {
    const key = "1234";
    expect(newList.containsKey(key)).toEqual(false);
  });
  test("return true for one", () => {
    const key = "one";
    expect(newList.containsKey(key)).toEqual(true);
  });
  test("return true, last node is two", () => {
    const key = "two";
    expect(newList.containsKey(key)).toEqual(true);
  });
  test("return true, first node is zero", () => {
    const key = "zero";
    expect(newList.containsKey(key)).toEqual(true);
  });
});

describe("test findIndex function", () => {
  beforeEach(() => {
    let fNode = Node();
    fNode.value = { key: "zero", value: `000` };
    newList.firstNode = fNode;

    let sNode = Node();
    sNode.value = { key: "one", value: `111` };
    newList.firstNode.nextNode = sNode;

    let tNode = Node();
    tNode.value = { key: "two", value: "222" };
    newList.firstNode.nextNode.nextNode = tNode;
  });
  test("return -1", () => {
    const key = "1234";
    expect(newList.findIndex(key)).toEqual(-1);
  });
  test("return 0", () => {
    const key = `zero`;
    expect(newList.findIndex(key)).toEqual(0);
  });
  test("return 1", () => {
    const key = `one`;
    expect(newList.findIndex(key)).toEqual(1);
  });
  test("return 2", () => {
    const key = `two`;
    expect(newList.findIndex(key)).toEqual(2);
  });
});
describe("test find function", () => {
  beforeEach(() => {
    let fNode = Node();
    fNode.value = { key: "zero", value: `000` };
    newList.firstNode = fNode;

    let sNode = Node();
    sNode.value = { key: "one", value: `111` };
    newList.firstNode.nextNode = sNode;

    let tNode = Node();
    tNode.value = { key: "two", value: "222" };
    newList.firstNode.nextNode.nextNode = tNode;
  });
  test("return null", () => {
    const key = "1234";
    expect(newList.find(key)).toEqual(null);
  });
  test("return 000", () => {
    const key = `zero`;
    expect(newList.find(key)).toEqual("000");
  });
  test("return 111", () => {
    const key = `one`;
    expect(newList.find(key)).toEqual("111");
  });
  test("return 222", () => {
    const key = `two`;
    expect(newList.find(key)).toEqual("222");
  });
});

describe("test toString function", () => {
  test("print list as string", () => {
    newList.append("dog");
    newList.append("cat");
    newList.append("parrot");
    newList.append("hamster");
    newList.append("snake");
    newList.append("turtle");
    expect(newList.toString()).toEqual(
      "( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null",
    );
  });
});

describe("test toArray function", () => {
  test("return empty array", () => {
    newList = LinkedList();
    expect(newList.toArray()).toEqual([]);
  });
  test("return array with items", () => {
    newList.append({ dog: 1 });
    newList.append({ cat: 10 });
    newList.append({ parrot: 100 });
    newList.append({ hamster: 1111 });
    newList.append({ snake: 1123 });
    newList.append({ turtle: 11211 });
    expect(newList.toArray()).toEqual([
      { dog: 1 },
      { cat: 10 },
      { parrot: 100 },
      { hamster: 1111 },
      { snake: 1123 },
      { turtle: 11211 },
    ]);
  });
});

describe("test removeAt function", () => {
  beforeEach(() => {
    newList.append("dog");
    newList.append("cat");
    newList.append("parrot");
    newList.append("hamster");
    newList.append("snake");
    newList.append("turtle");
  });
  test("throw RangeError", () => {
    expect(() => newList.removeAt(10)).toThrow(RangeError);
  });
  test("remove value cat at index 1", () => {
    newList.removeAt(1);
    expect(newList.toString()).toEqual(
      "( dog ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null",
    );
  });

  test("remove value turtle at index 5 (last)", () => {
    newList.removeAt(5);
    expect(newList.toString()).toEqual(
      "( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null",
    );
  });

  test("remove value dog at index 0", () => {
    newList.removeAt(0);
    expect(newList.toString()).toEqual(
      "( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null",
    );
  });
});
