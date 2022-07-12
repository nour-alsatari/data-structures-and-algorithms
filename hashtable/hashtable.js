const linkedlist = require("../linked-list/ll");

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt();
      }, 0) *
        599) %
      this.size
    );
  }

  set(key, value) {
    let hashIdx = this.hash(key);
    console.log({ hashIdx });
    if (!this.table[hashIdx]) {
      this.table[hashIdx] = new linkedlist();
    }

    let entryData = { [key]: value };
    this.table[hashIdx].append(entryData);
  }

  get(key) {
    let hashIdx = this.hash(key);
    let bucket = this.table[hashIdx];

    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        } else {
          current = current.next;
        }
      }
    }
    return null;
  }

  contains(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      let current = this.table[index].head;
      while (current) {
        if (current.value[key]) return true;

        current = current.next;
      }
      return false;
    } else {
      return false;
    }
  }

  keys() {
    const arr = [];
    for (const item of this.table) {
      if (item) {
        Object.values(item).map((ele) => {
          arr.push(Object.keys(ele.value).join(""));
        });
      }
    }
    return arr;
  }
}

function repeatedWords(text) {
  let record = new HashTable(15);
  let word = text.split(" ");

  for (let i = 0; i < word.length; ++i) {
    if (record.contains(word[i])) {
      record.set(word[i], record.get(word[i]) + 1);
      return word[i];
    } else {
      record.set(word[i], 1);
    }
  }
}

module.exports = {HashTable, repeatedWords }

