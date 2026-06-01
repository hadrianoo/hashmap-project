function Node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  function hasNexNode(node) {
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
        while (hasNexNode(node)) {
          node = node.nextNode;
        }
        node.nextNode = Node(value);
      }
    },
    size() {
      if (this.isListEmpty()) return 0;
      let counter = 1;
      let node = this.firstNode;
      while (hasNexNode(node)) {
        node = node.nextNode;
        counter++;
      }
      return counter;
    },
    head() {
      if (this.isListEmpty()) return;
      return this.firstNode.value;
    },
    tail() {
      if (this.isListEmpty()) return;
      let node = this.firstNode;
      while (hasNexNode(node)) {
        node = node.nextNode;
      }
      return node.value;
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
        if (Object.keys(node.value)[0] === key) return true;
        node = node.nextNode;
      }
      return false;
    },
    contains(value) {
      if (this.isListEmpty()) return false;
      let node = this.firstNode;
      while (nodeExists(node)) {
        if (node.value === value) return true;
        node = node.nextNode;
      }
      return false;
    },
    findIndex(key) {
      if (this.isListEmpty()) return -1;
      let node = this.firstNode;
      let index = 0;
      while (nodeExists(node)) {
        if (Object.keys(node.value)[0] === key) return index;
        index++;
        node = node.nextNode;
      }
      return -1;
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
    insertAt(index, ...values) {
      if (index > this.size() || index < 0) throw new RangeError();
      const valuesArray = [...values].reverse();
      if (index === 0) {
        valuesArray.forEach((item) => this.prepend(item));
        return;
      }

      let prev = null;
      let cur = this.firstNode;
      let counter = 0;

      for (const item of valuesArray) {
        while (nodeExists(cur) && counter !== index) {
          counter++;
          prev = cur;
          cur = cur.nextNode;
        }

        if (cur !== null) {
          prev.nextNode = Node(item, cur);
        } else {
          prev.nextNode = Node(item);
        }
        counter = 0;
        prev = null;
        cur = this.firstNode;
      }
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
