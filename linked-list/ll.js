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

  toString() {
    let currentNode = this.head;
    let values = "";

    while (currentNode != null) {
      values += ` { ${currentNode.value} }`;
      currentNode = currentNode.next;
    }

    return values;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode = newNode;
    }
  }

  insertBefore(newValue, value){
let newNode = new Node (newValue);

let currentNode = this.head;

while (currentNode.next){

  if( currentNode.value == value){
    newNode.next = currentNode.next
    currentNode.next = newNode    
  }

  currentNode = currentNode.next
}
  }

  insertAfter(newValue, value){
    let newNode = new Node (newValue);
    
    let currentNode = this.head;
    
    while (currentNode.next){
    
      if(currentNode.value == value){
        newNode.next = currentNode.next
        currentNode.next = newNode    
      }
    
      currentNode = currentNode.next
    }
      }
}

module.exports = LinkedList;
