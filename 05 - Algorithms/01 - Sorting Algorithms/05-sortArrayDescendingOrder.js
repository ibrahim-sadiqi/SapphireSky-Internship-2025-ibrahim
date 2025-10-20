// 5. Write a function to sort an array of numbers in descending order.

function insertionSortDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < key) arr[j + 1] = arr[j--];
    arr[j + 1] = key;
  }
  return arr;
}

arr = [4, 5, 2, 0, 6, 1, 10, -1];
console.log(insertionSortDescending(arr));
