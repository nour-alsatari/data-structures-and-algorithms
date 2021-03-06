"use strict";

const LinkedList = require("../ll");

describe("testing linked list", () => {
  it("Can properly insert into the linked list", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    expect(ll.head.value).toEqual("b");
    expect(ll.head.next.value).toEqual("a");
  });

  it("The head property will properly point to the first node in the linked list", () => {
    const ll = new LinkedList();
    // expect(ll).toBeInstanceOf(LinkedList);
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });

  it("Can properly insert multiple nodes into the linked list", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    expect(ll.head.value).toEqual("c");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next.value).toEqual("a");
  });

  it("Will return true when finding a value within the linked list that exists", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    let result = ll.includes("a");
    expect(result).toEqual(true);
  });

  it("Will return false when searching for a value in the linked list that does not exist", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    let result = ll.includes("ppp");
    expect(result).toEqual(false);
  });

  it("Can properly return a collection of all the values that exist in the linked list", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    let result = ll.toString();
    expect(result).toEqual("{c}->{b}->{a}->");
  });

  // ---------------------------------------------------------------------------------

  it("Can successfully add a node to the end of the linked list", () => {
    const ll = new LinkedList();
    ll.append("b");
    // expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next).toBeNull();
  });

  it("Can successfully add multiple nodes to the end of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next).toBeNull();
  });

  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertBefore("b", "z"); 
    console.log(ll.toString());
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next.value).toEqual("c");
  });

  it("Can successfully insert a node before the first node of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.insertBefore("a", "l"); 
    console.log(ll.toString());
    expect(ll.head.value).toEqual("a");
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertAfter("z", "b");
    expect(ll.head.next.next.value).toEqual("z");
    expect(ll.head.next.next.next.value).toEqual("c");

  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertAfter("z", "c");
    expect(ll.head.next.next.next.value).toEqual("z");
    expect(ll.head.next.next.next.next).toBeNull();

  });

  it("Where k is greater than the length of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    expect(ll.kthFromEnd(4)).toEqual('longer than the list');
   

  });

  it("Where k and the length of the list are the same", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    let result = ll.kthFromEnd(3);
    expect(result.value).toEqual('a')
   
  });

  it("Where k is not a positive integer", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    let result = ll.kthFromEnd(-5); // any negative value will point directly to the last node
    expect(result.next).toBeNull()
    expect(result.value).toEqual('c')
   
  });

  it("Where the linked list is of a size 1 ", () => {
    const ll = new LinkedList();
    ll.append("a");
    let result = ll.kthFromEnd(1); 
    expect(result.value).toEqual('a')
   
  });

  it("???Happy Path??? where k is not at the end, but somewhere in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.append("d");
    let result = ll.kthFromEnd(3); 
    expect(result.value).toEqual('b')
   
  }); // abcd

  it("merge two linked lists with the same length", () => {
    const ll1 = new LinkedList();
    ll1.append('a');
    ll1.append('b');
    const ll2 = new LinkedList();
    ll2.append('c');
    ll2.append('d');
    expect(ll1.linkedListZip(ll1, ll2).toString()).toEqual('{a}->{c}->{b}->{d}->');
   
  }); 

  it("merge two linked lists with different length", () => {
    const ll1 = new LinkedList();
    ll1.append('a');
    ll1.append('b');
    const ll2 = new LinkedList();
    ll2.append('c');
    ll2.append('d');
    ll2.append('e');
    expect(ll1.linkedListZip(ll1, ll2).toString()).toEqual('{a}->{c}->{b}->{d}->{e}->');
   
  }); 

});
