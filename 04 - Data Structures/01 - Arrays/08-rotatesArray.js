// 8. Implement a function that rotates an array k times to the right.

function rotateArray(arr, times) {
  const lastIndex = arr.length - 1;
  for (let k = 1; k <= times; k++) {
    let lst = arr[lastIndex];
    for (let i = lastIndex; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lst;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 4));
