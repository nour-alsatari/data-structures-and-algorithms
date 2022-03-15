const Node = require('./node');

class Stack{
constructor (){
    this.top = null;
}

push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  peek() {
    return this.top.value 
  }

  isEmpty() {
      if (this.top){
          return true;
      } else {
          return false;
      }

  }
}


module.exports = Stack;