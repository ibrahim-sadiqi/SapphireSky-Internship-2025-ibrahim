// 7. Implement Quick Sort and explain how pivot selection affects performance.

/* Because the Quick Sort algorithm partitions the array around a pivot,
choosing a good pivot is essential for optimal performance.
The best-case scenario occurs when the pivot divides the array into two roughly equal halves.
For example, in the array [4, 6, 0, 3, 10, 1], selecting 3 or 4 as the pivot would be ideal,
since they are close to the median. This results in more balanced partitions,
which leads to better overall performance—specifically, a time complexity of O(n log n).*/

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
    if (arr[j] <= pivot) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

let arr = [4, 6, 0, 3, 10, 1];
quicksort(arr);
console.log(arr);
