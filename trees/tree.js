let Node = require("./node");
let Stack = require("../stack-and-queue/stack");
let Queue = require("../stack-and-queue/queue");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // recursion relying on the underlying call stack
  preorder(root) {
    // root , left , right
    let res = [];
    inside(root);
    function inside(root) {
      res.push(root.value);

      if (root.left != null) {
        inside(root.left);
      }

      if (root.right != null) {
        inside(root.right);
      }
    }
    console.log(res);
    return res;
  }

  postorder(root) {
    // left  , right, root
    let res = [];
    inside(root);
    function inside(root) {
      if (root.left != null) {
        inside(root.left);
      }

      if (root.right != null) {
        inside(root.right);
      }

      res.push(root.value);
    }
    return res;
  }

  inOrder(root) {
    // left , root , right
    let res = [];
    inside(root);
    function inside(root) {
      if (root.left != null) {
        inside(root.left);
      }
      res.push(root.value);

      if (root.right != null) {
        inside(root.right);
      }
    }
    return res;
  }

  findMax(root) {
    if (root == null) {
      let min = roof.value;
      return min;
    }

    let res = root.value;
    let lres = findMax(root.left);
    let rres = findMax(root.right);

    if (lres > res) res = lres;
    if (rres > res) res = rres;
    return res;
  }

  breadthFirst(root) {
    let queue = new Queue();
    let arr = [];
    queue.enqueue(root);
    while (queue.front !== null && queue.rear !== null) {
      let dequeued = queue.dequeue();
      arr.push(dequeued.value);
      if (dequeued.left !== null) queue.enqueue(dequeued.left); 
      if (dequeued.right !== null) queue.enqueue(dequeued.right);
    }

    return arr;
  }
}
let a = new Node("A");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");

a.left = b;
a.right = c;
b.left = d;

let tree = new BinaryTree(a);
console.log(tree.breadthFirst(a));

class BinarySearchTree extends BinaryTree {
  add(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return undefined;
    return found;
  }
}

// let a = new Node("A");
// let b = new Node("b");
// let c = new Node("c");
// let d = new Node("d");

// a.left = b;
// a.right = c;
// b.left = d;

// let tree = new BinarySearchTree(a);

module.exports = { BinaryTree, BinarySearchTree };
