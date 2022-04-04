const Stack = require("./stack");

function validateBrackets(str) {
  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
      if ( (stack.isEmpty())  || // looking at a closing brancket but there is NO opening bracket in the stack
        (str[i] == ")" && stack.peek() !== "(") || // if the char im looking at is closing and peak is NOT openning
        (str[i] == "}" && stack.peek() !== "{") ||
        (str[i] == "]" && stack.peek() !== "[")
      ) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.isEmpty(); 
  // if parantheses are balanced we will end up with empty stack and return T
  //if it's not empty in the end then some opening parantheses didn't find its closing one
}

module.exports.validateBrackets = validateBrackets 
// module.exports = {validateBrackets} if i do this then I'm completely replacing module.exports with an object containing only validateBrackets
// console.log(module)

