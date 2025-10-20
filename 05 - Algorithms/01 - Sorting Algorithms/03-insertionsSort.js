// 3. Implement the Insertion Sort algorithm.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) arr[j + 1] = arr[j--];
    arr[j + 1] = key;
  }
  return arr;
}

arr = [4, 5, 2, 6, 1, 10, -1];
console.log(insertionSort(arr));
