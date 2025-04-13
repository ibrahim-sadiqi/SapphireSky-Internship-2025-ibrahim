// 12. Write a function to sort an array using Radix Sort.

const getMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

const countingSort = function (arr, exp) {
  const length = arr.length;
  let output = new Array(length);
  let count = new Array(10).fill(0);
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  return output;
};

const redixSort = function (arr) {
  const max = getMax(arr);
  console.log(max);
  let sorted = [...arr];
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const sortedIte = countingSort(sorted, exp);
    sorted = sortedIte;
  }
  return sorted;
};

const arr = [53, 89, 150, 36, 633, 233];
console.log(redixSort(arr));
