// 7. How do you merge two sorted arrays into one sorted array?

function mergeTwoSortedArray(firstArray, secondArray) {
  const sizeFirst = firstArray.length;
  const sizeSecond = secondArray.length;

  const sortedArray = [];
  let j = 0;
  for (let i = 0; i < sizeFirst; i++) {
    while (secondArray[j] < firstArray[i]) {
      sortedArray.push(secondArray[j++]);
    }
    sortedArray.push(firstArray[i]);
  }
  while (j < sizeSecond) {
    sortedArray.push(secondArray[j++]);
  }
  return sortedArray;
}

const arr1 = [-1, 0, 2];
const arr2 = [-10, 1, 20];

console.log(mergeTwoSortedArray(arr1, arr2));
