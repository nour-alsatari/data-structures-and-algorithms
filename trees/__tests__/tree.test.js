const Node = require("../node");
const {BinaryTree} = require("../tree");

describe("testing queue", () => {
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


});
