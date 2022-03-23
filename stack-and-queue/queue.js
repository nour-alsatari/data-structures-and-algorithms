const Node = require("./node");

class Queue {
  constructor() {
    this.front = null; // this.front.next or value
    this.rear = null; // this.rear.next or value
  }

  enqueue(value) {
    // adding to the end
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    try {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;

      return temp.value;
    } catch (error) {
      return "queue is empty";
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front == null && this.rear == null;
  }
}

module.exports = Queue;
