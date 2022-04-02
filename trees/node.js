'use strict'

class Node {
    constructor(value){
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

// let a = new Node ("A")
// let b = new Node ("b")
// let c = new Node ("c")
// a.left = b
// a.right = c
// console.log(a)

// nodes contain their own value and a refrence to other nodes

module.exports = Node;