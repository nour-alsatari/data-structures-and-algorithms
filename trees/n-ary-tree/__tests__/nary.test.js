const {Node, NaryTree} = require("../NaryTree")

let a = new Node(15);
let b = new Node(6);
let c = new Node(44);
let d = new Node(10);

a.children = [b, c, d];
b.parent = a;
c.parent = a;
d.parent = a;
let tree = new NaryTree(a);
let result = tree.fizzbuzztree(a)
console.log(result);
describe("testing n ary tree", () => {
  it("If the value is divisible by 3 and 5, replace the value with “FizzBuzz”", () => {
    expect(result.value).toEqual('FizzBuzz');
  });

  it("If the value is divisible by 3, replace the value with “Fizz”", () => {

    expect(result.children[0].value).toEqual('Fizz');
  });

  it("If the value is not divisible by 3 or 5, simply turn the number into a String.", () => {

    expect(result.children[1].value).toEqual('44');
  });

  it("If the value is divisible by 5, replace the value with “Buzz”", () => {

    expect(result.children[2].value).toEqual('Buzz');
  });

});