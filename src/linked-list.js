function Node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  function hasNextNode(node) {
    return node.nextNode !== null;
  }
  function nodeExists(node) {
    return node !== null;
  }
  return {
    firstNode: null,

    isListEmpty() {
      if (this.firstNode === null) return true;
      return false;
    },

    prepend(value) {
      if (this.isListEmpty()) {
        this.firstNode = Node(value);
      } else {
        let node = this.firstNode;
        this.firstNode = Node(value, node);
      }
    },
    append(value) {
      if (this.isListEmpty()) {
        this.prepend(value);
      } else {
        let node = this.firstNode;
        while (hasNextNode(node)) {
          node = node.nextNode;
        }
        node.nextNode = Node(value);
      }
    },
    size() {
      if (this.isListEmpty()) return 0;
      let counter = 1;
      let node = this.firstNode;
      while (hasNextNode(node)) {
        node = node.nextNode;
        counter++;
      }
      return counter;
    },
    head() {
      if (this.isListEmpty()) return;
      return this.firstNode.value;
    },
    at(index) {
      if (index >= this.size()) return;
      let node = this.firstNode;
      let counter = 0;
      while (nodeExists(node)) {
        if (counter === index) return node.value;
        node = node.nextNode;
        counter++;
      }
    },
    pop() {
      if (this.isListEmpty()) return;
      let head = this.firstNode;
      if (this.size() > 1) {
        this.firstNode = head.nextNode;
        return head.value;
      } else {
        this.firstNode = null;
        return head.value;
      }
    },
    containsKey(key) {
      if (this.isListEmpty()) return false;
      let node = this.firstNode;
      while (nodeExists(node)) {
        if (node.value.key === key) return true;
        node = node.nextNode;
      }
      return false;
    },
    findIndex(key) {
      if (this.isListEmpty()) return -1;
      let node = this.firstNode;
      let index = 0;
      while (nodeExists(node)) {
        if (node.value.key === key) return index;
        index++;
        node = node.nextNode;
      }
      return -1;
    },
    find(key) {
      if (this.isListEmpty()) return null;
      let node = this.firstNode;
      while (nodeExists(node)) {
        if (node.value.key === key) return node.value.value;
        node = node.nextNode;
      }
      return null;
    },
    toString() {
      if (this.isListEmpty()) return "";
      let node = this.firstNode;
      let string = "";
      while (nodeExists(node)) {
        string += `( ${node.value} )` + " -> ";
        node = node.nextNode;
      }
      if (node === null) string += "null";
      return string;
    },
    toArray() {
      if (this.isListEmpty()) return [];
      let node = this.firstNode;
      let array = [];
      while (nodeExists(node)) {
        array.push(node.value);
        node = node.nextNode;
      }
      return array;
    },
    removeAt(index) {
      if (index >= this.size() || index < 0) throw new RangeError();
      if (index === 0) {
        this.pop();
        return;
      }
      let prev = null;
      let cur = this.firstNode;
      let counter = 0;

      while (nodeExists(cur) && counter !== index) {
        counter++;
        prev = cur;
        cur = cur.nextNode;
      }
      if (cur !== null) {
        prev.nextNode = cur.nextNode;
      } else {
        prev.nextNode = null;
      }
    },
  };
}
export { Node, LinkedList };
