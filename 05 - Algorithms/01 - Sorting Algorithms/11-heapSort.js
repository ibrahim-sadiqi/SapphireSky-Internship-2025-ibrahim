// 11. Implement Heap Sort and explain its working.

/*
Heap sort works with a binary tree. First, it organizes the array into a tree structure
where each parent node is greater than its children a process known as heapify.
After that, the root or the first element of the heap, which is the largest,
is swapped with the last element. Then, heapify is applied again to restore the heap property,
ensuring the new root is still greater than its children. This process is repeated until all elements are sorted.
 */

const heapify = function (arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  } 
};

const heapSort = function (arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];

    heapify(arr, i, 0);
  }
};

const arr = [2, 8, 3, 4, 1, 10, 0, 11, 5];
heapSort(arr);
console.log(arr);
