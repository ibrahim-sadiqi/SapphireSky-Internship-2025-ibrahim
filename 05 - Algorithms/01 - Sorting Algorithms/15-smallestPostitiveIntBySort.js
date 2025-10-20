// 15. Write a function to find the smallest missing positive integer using sorting.

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

const getSmallestMissedPositvie = (arr) => {
  let key = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) key++;
    if (arr[i] > key) break;
  }
  return key;
};

let arr = [4, 5, 2, 0, 6, 1, 1, -2, 0, -1, 20];

mergeSort(arr);
console.log(getSmallestMissedPositvie(arr));
