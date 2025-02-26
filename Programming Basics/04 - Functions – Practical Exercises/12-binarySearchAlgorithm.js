// Binary Search Algorithm
// Write a function binarySearch(arr, target) that performs a
// binary search on a sorted array.

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.trunc((high + low) / 2);
    if (target === arr[mid]) {
      return 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function binarySearchR(arr, target, low, high) {
  let mid = Math.trunc((high + low) / 2);
  if (low > high) {
    return -1;
  } else if (target === arr[mid]) {
    return 1;
  } else if (target > arr[mid]) {
    return binarySearchR(arr, target, mid + 1, high);
  } else {
    return binarySearchR(arr, target, low, mid - 1);
  }
}

let arr = [2, 1, 7, 4, 5, 6, 10, 0, 23, 5, 8, 1, 30, 11];
arr.sort(); // For applying binary search data must be sorted.
console.log(binarySearch(arr, 23));
console.log(binarySearchR(arr, 23, 0, arr.length));
