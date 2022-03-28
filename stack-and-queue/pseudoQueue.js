const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    // this.front = null;
    // this.rear = null;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    // console.log(this.stack1);
  }

  dequeue() {
    // pop from stack1 and push in stack 2 recursivley
    // then pop from stack 2 once done
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
        console.log("hello", this.stack2);
      }
    }

    return this.stack2.pop();
  }
}

// how to detect queue is empty? when stack1 and stack2 both are empty 

let soso = new PseudoQueue();
soso.enqueue("b");
soso.enqueue("c");

let dequeued = soso.dequeue();
console.log(dequeued);
let dequeued2 = soso.dequeue();
console.log(dequeued2);

module.exports = PseudoQueue;
