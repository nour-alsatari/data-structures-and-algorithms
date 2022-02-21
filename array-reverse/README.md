![Test Image 3](../images/reverse.png)

code:

>function reverseArray(arr) { <br>
  let reversed = []; <br>
  for (let i = arr.length - 1; i >= 0; i--) <br>{
    reversed.push(arr[i]); <br>
  } <br>
  return reversed;
}