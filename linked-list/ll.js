"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      //means LL is empty
      this.head = node;
    } else {
      //means LL is not empty
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value) {
        return true;
      } else {
        return false;
      }
    }
  }

  toString(){
      let currentNode = this.head;
      let values = "";

      while (currentNode != null){
          values += ` { ${currentNode.value} }`
          currentNode = currentNode.next; 
      }

      return values;
  }
}

module.exports = LinkedList;
