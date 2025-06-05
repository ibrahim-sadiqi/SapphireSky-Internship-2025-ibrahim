/**
 * You are given a 2-dimensional matrix representing data entries, where each cell has a unique identifier called a cellId.
 * Your task is to sort the matrix rows based on values in a single specified column.

This task assesses your ability to work with multi-dimensional data structures, perform sorting operations,
and maintain correct mappings between data and metadata (IDs).
 */

function quicksort(arr, col, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  let pivot_index = partition(arr, low, high, col);
  quicksort(arr, col, low, pivot_index - 1);
  quicksort(arr, col, pivot_index + 1, high);
}

function partition(arr, low, high, col) {
  let pivot = arr[high][col];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j][col] <= pivot) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const sortMatrix = (matrix, col) => {
  quicksort(matrix, col);
};

const matrix = [
  [4, 2, 4, 0],
  [5, 1, 3, 3],
  [3, 0, 0, 5],
  [1, 9, 2, 6],
  [6, 2, 1, 2],
];
console.log(matrix);
sortMatrix(matrix, 0);
console.log(matrix);
