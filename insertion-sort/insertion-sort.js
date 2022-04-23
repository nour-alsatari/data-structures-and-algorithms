

exports.insertionSort = (arr) => {
  let key, j;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

let arr = [8, 4, 23, 42, 16, 15];
console.log("before", arr);

exports.insertionSort(arr);

console.log("after", arr);
