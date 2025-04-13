// 8. Write a function to perform Counting Sort.

function countingSort(arr) {
  if (arr.length === 0) return [];
  let max = (min = arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  coutArr = new Array(max - min + 1).fill(0);

  for (const n of arr) {
    coutArr[n - min]++;
  }
  let index = 0;
  for (let i = 0; i < coutArr.length; i++) {
    while (coutArr[i] > 0) {
      arr[index++] = i + min;
      coutArr[i]--;
    }
  }
  return arr;
}

const arr = [2, 3, 0, -1, -100, 2, 3, 2];
console.log(countingSort(arr));
