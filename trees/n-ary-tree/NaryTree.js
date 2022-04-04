const Queue = require("../../stack-and-queue/queue");

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }
}
class NaryTree {
  constructor(root = null) {
    this.root = root;
  }

  fizzbuzztree(root) {
    // i have access to the whole tree from the root

    let queue = new Queue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
      let dequeued = queue.dequeue();
      console.log(dequeued.value);

      if (dequeued.value % 5 === 0 && dequeued.value % 3 === 0)
        dequeued.value = "FizzBuzz";
      else if (dequeued.value % 5 === 0) dequeued.value = "Buzz";
      else if (dequeued.value % 3 === 0) dequeued.value = "Fizz";
      else dequeued.value = dequeued.value.toString();

      //  24.toString(); // Error: Invalid or unexpected token
      // (24).toString(); // "24"

      dequeued.children.forEach((child) => {
        queue.enqueue(child);
      });
    }

    return root;
  }
}

// creating 3-ary tree

let a = new Node(15);
let b = new Node(6);
let c = new Node(44);
let d = new Node(10);

a.children = [b, c, d];
b.parent = a;
c.parent = a;
d.parent = a;
let tree = new NaryTree(a);
// console.log(tree);

// console.log(a);

// console.log('resultttt', tree.fizzbuzztree(a) )

// It's saying that the parent property of the children refers back to the original object, the one where it says <ref *1> (which makes sense).  That's called a circular reference because you could keep going in circles from the parent to the child to the parent etc.
// This is relevant because if it tried to output the entire object naively, it could keep doing so forever
// Node {
//   value: 'a',
//   children: [
//     Node { value: 'b', children: [], parent:
//       Node {
//         value: 'a',
//         children: [
//           Node { value: 'b', children: [], parent:
//             Node {
//               value: 'a',
//               children: [
//                 Node { value: 'b', children: [], parent: // … and so on

// So instead it's smart enough to point out the circular reference and stop there

module.exports = {Node, NaryTree};