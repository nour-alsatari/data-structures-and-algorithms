const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    try {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;

      return temp.value;
    } catch (error) {
      return "empty stack";
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "empty stack";
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top == null;
  }
}

// validatebrackets(expr)
// {
    
//     let stack = [];
 
//     for(let i = 0; i < expr.length; i++)
//     {
//         let x = expr[i];
 
//         if (x == '(' || x == '[' || x == '{')
//         {
             
//             stack.push(x);
//             continue;
//         }

//         if (stack.length == 0)
//             return false;
             
//         let check;
//         switch (x){
//         case ')':
//             check = stack.pop();
//             if (check == '{' || check == '[')
//                 return false;
//             break;
 
//         case '}':
//             check = stack.pop();
//             if (check == '(' || check == '[')
//                 return false;
//             break;
 
//         case ']':
//             check = stack.pop();
//             if (check == '(' || check == '{')
//                 return false;
//             break;
//         }
//     }

//     return (stack.length == 0);
// }

module.exports = Stack;
