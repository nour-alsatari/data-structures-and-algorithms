"use strict";
let Node = require("../../trees/node");
let { BinaryTree } = require("../../trees/tree");
let tree_intersection = require("../tree-intersection");

let a = new Node("20");
let b = new Node("10");
let c = new Node("0");
let d = new Node("90");

a.left = b;
a.right = c;
b.left = d;

let tree1 = new BinaryTree(a);

let e = new Node("20");
let f = new Node("10");
let g = new Node("0");
let h = new Node("30");

e.left = f;
e.right = g;
f.left = h;

let tree2 = new BinaryTree(e);

describe("testig tree intersection", () => {
  it("return common values between 2 trees", () => {
    expect(tree_intersection(tree1, tree2)).toEqual(["10", "0", "20"]);
  });

  it("Successfully returns a list of all common values", () => {
    expect(tree_intersection(tree2, tree2)).toEqual(["30","10", "0", "20"]);
  });
});
