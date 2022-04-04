const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    try {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;

      return temp.value;
    } catch (error) {
      return "empty stack";
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "empty stack";
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top == null;
  }

}



module.exports = Stack;
