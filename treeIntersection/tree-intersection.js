let Node = require("../trees/node");
let {BinaryTree} = require('../trees/tree');
let {HashTable} = require('../hashtable/hashtable');

function tree_intersection (tree1, tree2){
let tree1_results = tree1.postorder(tree1.root);
let tree2_results = tree2.postorder(tree2.root);
let common = [];
let hashtable = new HashTable();

for (let i = 0; i < tree1_results.length; i++) {
    hashtable.set(tree1_results[i], 1);
  }
  for (let i = 0; i < tree2_results.length; i++) {
    if (hashtable.contains(tree2_results[i])) {
        common.push(tree2_results[i]);
    }
  }
  return common;
}


let a = new Node('20');
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

console.log(tree_intersection(tree1, tree2))

module.exports = tree_intersection