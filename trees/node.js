'use strict'

class Node {
    constructor(value){
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

// nodes contain their own value and a refrence to other nodes

module.exports = Node;