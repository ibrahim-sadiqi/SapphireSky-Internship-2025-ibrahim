// 12. Write a function to find the missing number in an array of 1 to N.

function getMissingNumbers(arr) {
  const n = arr[arr.length - 1];
  const missing = new Set();
  let start = 1;
  while (start <= n) {
    let isExists = false;
    for (let i = 0; i < arr.length; i++) {
      if (start === arr[i]) {
        isExists = true;
        break;
      }
    }
    if (!isExists) missing.add(start);
    start++;
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

const arr = [1, 2, 3, 6];

console.log(getMissingNumber(arr));
console.log(getMissingNumbers(arr));
