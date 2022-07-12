"use strict";

const {HashTable} = require("../hashtable");
const {repeatedWords} = require("../hashtable");

const HashTable1 = new HashTable(33);
HashTable1.set("haya", "sister");
HashTable1.set("ahmed", "brother");
HashTable1.set("maha", "mother");

describe("testing hashTable", () => {
  it("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    expect(Object.values(HashTable1.table[16].head.value).join("")).toEqual(
      "sister"
    );
  });

  it("Retrieving based on a key returns the value stored", () => {
    expect(HashTable1.get("haya")).toEqual("sister");
  });

  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(HashTable1.get("nour")).toBeNull();
  });

  it("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    expect(HashTable1.keys()).toEqual(["ahmed", "haya", "maha"]);
  });

  it("Successfully handle a collision within the hashtable", () => {
    const HashTable2 = new HashTable(1);
    HashTable2.set("haya", "sister");
    HashTable2.set("ahmed", "brother");
    HashTable2.set("maha", "mother");

    expect(HashTable2.table[0].head.next.value).toEqual({ ahmed: "brother" });
  });

  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const HashTable2 = new HashTable(1);
    HashTable2.set("haya", "sister");
    HashTable2.set("ahmed", "brother");
    HashTable2.set("maha", "mother");

    expect(HashTable2.get("haya")).toEqual("sister");
  });

  it("Successfully hash a key to an in-range value", () => {
    const HashTable3 = new HashTable(10);
    let hashedValue = HashTable3.hash("nour");

    expect(hashedValue).toBeGreaterThanOrEqual(0);
    expect(hashedValue).toBeLessThanOrEqual(10);
  });
});

describe("repeatedWords", () => {
  it("returns the first repeated word", () => {
    let word = repeatedWords(
      "Once upon a time, there was a brave princess who"
    );
    expect(word).toEqual("a");
  });

  it("returns the first repeated word", () => {
    let word = repeatedWords(
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York"
    );
    expect(word).toEqual("the");
  });

  
});
