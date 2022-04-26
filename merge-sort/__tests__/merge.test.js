const { Mergesort } = require("../merge-sort");

describe("testing merge sort", () => {
  it("Can properly merge sort the array", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let result = Mergesort(arr);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("return the element if the array length is one", () => {
    let arr = [8];
    let result = Mergesort(arr);
    expect(result).toEqual([8]);
  });

});
