"use strict";

const insertionSort = require("../insertion-sort");

describe("testing insertion sort", () => {
  it("Can properly sort the array", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let result = insertionSort.insertionSort(arr);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });


});
