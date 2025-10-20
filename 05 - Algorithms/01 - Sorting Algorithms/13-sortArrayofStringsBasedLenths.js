// 13. How do you sort an array of strings based on their lengths?

const mergeSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};

const merge = (arr, left, mid, right) => {
  let l = left;
  let r = mid + 1;
  const sorted = [];
  while (l <= mid && r <= right) {
    if (arr[l].length <= arr[r].length) sorted.push(arr[l++]);
    else sorted.push(arr[r++]);
  }

  while (l <= mid) sorted.push(arr[l++]);
  while (r <= right) sorted.push(arr[r++]);

  for (let i = 0; i < sorted.length; i++) arr[i + left] = sorted[i];
};

const sortByLength = (str) => mergeSort(arr);

const arr = ["you", "are", "beautiful", "looking"];
sortByLength(arr);
console.log(arr);
