"use strict";

const Node = require("./node.js"); // i need to require node because i will have to create an instance of Node

class LinkedList {
  constructor() {
    this.head = null; // when we create the linkedlist at the first time head will point to null because there's no node yet
    // later will make the head point to the next node
  }

  insert(value) {
    const newNode = new Node(value); // next is null by default
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let values = "";

    while (currentNode != null) {
      values += `{${currentNode.value}}->`;
      currentNode = currentNode.next;
    }

    return values;
  }

  //---------------------------------------------------

  append(value) {
    let newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode; // i have to write .next because it wasn't saved in line 69
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next == value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(newValue, value) {
    let newNode = new Node(newValue);
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;

      if (currentNode.value == value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }
  }
  //4
  kthFromEnd(n) {
    let p = this.head;
    let f = this.head;
    let ctr = 1;
    while (ctr <= n - 1) {
      f = f.next;
      ctr = ctr + 1;
    } //3
    if (f == null) {
      return "longer than the list";
    } else {
      while (f.next != null) {
        p = p.next;
        f = f.next;
      } // move forward f and p by 1 position till f.next is null
      return p;
    }
  }
}

module.exports = LinkedList;
