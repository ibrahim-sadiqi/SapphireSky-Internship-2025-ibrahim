// 12. Write a function to find the missing number in an array of 1 to N.
function getLargestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

function getMissingNumbers(arr) {
  const n = getLargestElement(arr); // get largest element in array for not sorted arrays
  const set = new Set(arr);
  const missing = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) missing.push(i);
  }
  return missing;
}

function getMissingNumber(arr) {
  const n = arr.length + 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return (n * (n + 1)) / 2 - sum;
}

const arr1 = [1, 2, 3, 5];
const arr = [1, 3, 10, 6, 9];

console.log(getMissingNumber(arr1));
console.log(getMissingNumbers(arr));
