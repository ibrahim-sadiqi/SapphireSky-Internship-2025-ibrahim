// 6. Implement Merge Sort and explain its time complexity.

const mergeSort = function (arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};

const merge = function (arr, start, mid, end) {
  let left = start;
  let right = mid + 1;
  const sortedArray = [];
  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) sortedArray.push(arr[left++]);
    else sortedArray.push(arr[right++]);
  }

  while (left <= mid) sortedArray.push(arr[left++]);
  while (right <= end) sortedArray.push(arr[right++]);
  for (let i = 0; i < sortedArray.length; i++) {
    arr[i + start] = sortedArray[i];
  }
};

let arr = [4, 5, 2, 0, 6, 1, 1, -2, 0, -1, 20];
console.log(arr);
mergeSort(arr);
console.log(arr);

// Merge sort time complexity in splitting operation or deviding is O(logn)
// and for merging at each level is O(n)
// Total time complexity is O(nlog n)
// As we can see in the algorithm, an extra array is used at each level
// to store the sorted elements. Therefore, the space complexity is O(n).
