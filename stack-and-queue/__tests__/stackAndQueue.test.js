const Stack = require("../stack");
const Queue = require("../queue");
const PseudoQueue = require("../pseudoQueue");

describe("testing stack", () => {
  it("Can successfully push onto a stack", () => {
    const stack = new Stack();
    stack.push("a");
    expect(stack.top.value).toEqual("a");
    // console.log("stack", stack); // this is the entire stack
    // console.log("value ", stack.top.value); // this is the node value
    // console.log(stack.top); // this is a node
  });

  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    expect(stack.top.value).toEqual("b");
    expect(stack.top.next.value).toEqual("a");
    expect(stack.top.next.next).toBeNull();
  });

  it("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    let popped = stack.pop();
    expect(popped).toEqual("b");
  });

  it("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    stack.pop();
    stack.pop();
    stack.pop();
    let popped = stack.pop();

    expect(popped).toEqual("empty stack");
  });

  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    let peeked = stack.peek();

    expect(peeked).toEqual("b");
  });

  it("Can successfully instantiate an empty stack", () => {
    const stack = new Stack(); // Stack { top: null } stack is an instance which is an object that has properties
    expect(stack.top).toBeNull();
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    const stack = new Stack();
    let popped = stack.pop();
    let peekValue = stack.peek();

    expect(popped).toEqual("empty stack");
    expect(peekValue).toEqual("empty stack");
  });
});

//*************************************************************************************/

describe("testing queue", () => {
  it("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue("a");
    expect(queue.front.value).toEqual("a");
    //   console.log("queue", queue); // this is the entire stack
    //   console.log("value ", queue.front.value); // this is the node value
    //   console.log(queue.front); // this is a node
    //   console.log(queue.rear); // null
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.front.value).toEqual("a");
    expect(queue.rear.value).toEqual("c");
    // console.log("queue", queue); // this is the entire stack
    // console.log("value ", queue.front.value); // this is the node value
    // console.log(queue.front); // this is a node
    // console.log(queue.rear); // null
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    let removed = queue.dequeue();
    expect(removed).toEqual("a");
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    let peeked = queue.peek();
    expect(peeked).toEqual("a");
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.dequeue();
    queue.dequeue();
    let empty = queue.dequeue();
    expect(empty).toEqual("queue is empty");
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    const queue = new Queue();
    let peeked = queue.peek();
    let removed = queue.dequeue();
    expect(peeked).toEqual("queue is empty");
    expect(removed).toEqual("queue is empty");
  });

  // PseudoQueue

  it("Calling enqueue on PseudoQueue", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue("b");
    console.log(pseudoQueue);
    expect(pseudoQueue.stack1.top.value).toEqual("b");
  });

  it("pushing multiple elements using enqueue on PseudoQueue", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue("a");
    pseudoQueue.enqueue("b");
    pseudoQueue.enqueue("c");
    console.log(pseudoQueue);
    expect(pseudoQueue.stack1.top.value).toEqual("c");
    expect(pseudoQueue.stack1.top.next.value).toEqual("b");
    expect(pseudoQueue.stack1.top.next.next.value).toEqual("a");
  });

  it("dequeue elements using dequeue on PseudoQueue when stack2 is empty", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue("a");
    pseudoQueue.enqueue("b");
    pseudoQueue.enqueue("c");
    let dequeued = pseudoQueue.dequeue();
    expect(dequeued).toEqual("a");
    
  });

  it("dequeue elements using dequeue on PseudoQueue when stack2 is not empty", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue("a");
    pseudoQueue.enqueue("b");
    pseudoQueue.enqueue("c");
    let dequeued = pseudoQueue.dequeue();
    expect(dequeued).toEqual("a");
    let dequeued2 = pseudoQueue.dequeue();
    expect(dequeued2).toEqual("b");

    
  });
});
