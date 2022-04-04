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
    if (root == null) return;
    else {
      let max = root.value;
      let lmax = this.findMax(root.left);
      let rmax = this.findMax(root.right);

      if (lmax > max) max = lmax;
      if (rmax > max) max = rmax;
      return max;
    }
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

class BinarySearchTree extends BinaryTree {
  add(value, root = null) {
    if (root == null) {
      this.root = new Node(value);
      return;
    }
    if (root.value > value) {
      if (root.left == null) {
        root.left = new Node(value);
        return;
      } else {
        add(value, root.left);
      }
    }

    if (root.value < value) {
      if (root.right == null) {
        root.right = new Node(value);
        return;
      } else {
        add(value, root.right);
      }
    }
  }

  contains(value, root) {
    // console.log(root.value);
    if (root === null) return false;
    try {
      if (root.value == value) return true;
      if (value < root.value) return this.contains(value, root.left);
      if (value > root.value) return this.contains(value, root.right);
    } catch (error) {
      return false;
    }
  }
}

let a = new Node(90);
let b = new Node(20);
let c = new Node(40);
let d = new Node(15);

a.left = b;
a.right = c;
b.left = d;

let tree = new BinaryTree(a);
console.log(tree.findMax(a));


module.exports = { BinaryTree, BinarySearchTree };

// for later https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b
