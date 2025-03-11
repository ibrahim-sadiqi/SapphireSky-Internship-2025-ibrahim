// 8. Implement a function that rotates an array k times to the right.

function rotateArray(arr, times) {
  const n = arr.length;
  for (let k = 1; k <= times % n; k++) {
    let lst = arr[n - 1];
    for (let i = n - 1; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lst;
    console.log(arr);
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(arr, 9)); // Time complexity O(n * k % n) -->
