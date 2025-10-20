// 10. Implement a function to find the Kth largest element in an array using sorting.

function quicksort(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  let pivot_index = partition(arr, low, high);
  quicksort(arr, low, pivot_index - 1);
  quicksort(arr, pivot_index + 1, high);
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] >= pivot) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const KthLaregestUsingQuicksort = function (arr, k) {
  quicksort(arr);
  const unique = [...new Set(arr)];
  return unique[k - 1];
};

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

const KthLaregestUsingCoutingSort = function (arr, k) {
  countingSort(arr);
  const unique = [];
  unique.push(arr[arr.length - 1]);
  let j = 0;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] === unique[j]) continue;
    unique.push(arr[i]);
    j++;
  }
  return unique[k - 1];
};
const arr = [2, 3, 0, -1, -1, 2, -12, 2, 3, 2];
const arr1 = [2, 3, 0, -1, -1, 2, -12, 2, 3, 2];

console.log(KthLaregestUsingCoutingSort(arr, 1)); // Time O(n + k) and Space O(k), not stable just for integer
console.log(KthLaregestUsingQuicksort(arr1, 1)); // Time average O(n log n) and Space O(n)
