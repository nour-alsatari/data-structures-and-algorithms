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
    console.log(result);
    expect(result).toEqual("{c}->{b}->{a}->");
  });

});
