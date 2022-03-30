let Node = require("./node");
("use strict");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
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
}

module.exports = BinaryTree;
