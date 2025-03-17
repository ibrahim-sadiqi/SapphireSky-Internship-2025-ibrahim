// 10. Implement a function that finds the intersection of two arrays.

function intersection(arr1, arr2) {
  const inters = new Set();
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let j = (i = 0);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      inters.add(arr1[i]);
      j++;
      i++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return inters;
}

function interSet(arr1, arr2) {
  if (arr1.length > arr2.length) [arr1, arr2] = [arr2, arr1];
  const unique = new Set(arr2);
  return new Set(arr1.filter((item) => unique.has(item)));
}

const arr1 = [2, 5, 6, 4, 10, 11, 35];
const arr2 = [5, 4, 1, 9, 10, 11, 12, 20, 25, 30, 35];

console.log(intersection(arr1, arr2)); // two pointer sulotion time complexity O(nlogn) space complexity O(1)
console.log(interSet(arr1, arr2)); // time complexity O(n + m) and space complexity O(n)
