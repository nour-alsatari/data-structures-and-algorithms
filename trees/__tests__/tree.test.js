const Node = require("../node");
const { BinaryTree, BinarySearchTree } = require("../tree");

describe("testing tree", () => {
  it("Can successfully instantiate an empty tree", () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it("Can successfully instantiate a tree with a single root node", () => {
    let a = new Node("A");
    let tree = new BinaryTree(a);
    expect(tree.root.value).toEqual("A");
  });

  it("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
    let a = new Node(30);

    let tree = new BinarySearchTree(a);
    tree.add(20, a);
    tree.add(40, a);

    expect(tree.root.left.value).toEqual(20);
    expect(tree.root.right.value).toEqual(40);
  });

  it("Can successfully return a collection from a preorder traversal", () => {
    let a = new Node("a");
    let b = new Node("b");
    let c = new Node("c");
    let d = new Node("d");

    a.left = b;
    a.right = c;
    b.left = d;

    let tree = new BinaryTree(a);

    expect(tree.preorder(a)).toEqual(["a", "b", "d", "c"]);
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    let a = new Node("a");
    let b = new Node("b");
    let c = new Node("c");
    let d = new Node("d");

    a.left = b;
    a.right = c;
    b.left = d;

    let tree = new BinaryTree(a);

    expect(tree.inOrder(a)).toEqual(["d", "b", "a", "c"]);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    let a = new Node("a");
    let b = new Node("b");
    let c = new Node("c");
    let d = new Node("d");

    a.left = b;
    a.right = c;
    b.left = d;

    let tree = new BinaryTree(a);

    expect(tree.postorder(a)).toEqual(["d", "b", "c", "a"]);
  });

  it("Returns true or false for the contains method, given an existing or non-existing node value", () => {
    let a = new Node(30);
    let b = new Node(15);
    let c = new Node(40);
    let d = new Node(2);

    a.left = b;
    a.right = c;
    b.left = d;

    let tree = new BinarySearchTree(a);

    expect(tree.contains(2, a)).toEqual(true);
    expect(tree.contains(44, a)).toEqual(false);
  });

  it("can return elements in a breadth first order", () => {
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    let d = new Node("D");

    a.left = b;
    a.right = c;
    b.left = d;

    let tree = new BinaryTree(a);
    expect(tree.breadthFirst(a)).toEqual(["A", "B", "C", "D"]);
  });

  it("can find the max value in a tree of left and right children", () => {
    let a = new Node(80);
    let b = new Node(100);
    let c = new Node(90);
    let d = new Node(1);

    a.left = b;
    a.right = c;
    b.left = d;

    let tree = new BinaryTree(a);
    expect(tree.findMax(a)).toEqual(100);
  });

  it("can find the max value one node tree", () => {
    let a = new Node(80);

    let tree = new BinaryTree(a);
    expect(tree.findMax(a)).toEqual(80);
  });
});
