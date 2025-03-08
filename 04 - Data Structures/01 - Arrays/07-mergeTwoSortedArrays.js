// 7. How do you merge two sorted arrays into one sorted array?

function mergeTwoSortedArray(firstArray, secondArray) {
  const sizeFirst = firstArray.length;
  const sizeSecond = secondArray.length;

  if (firstArray[0] >= secondArray[sizeSecond - 1]) {
    return [...secondArray, ...firstArray];
  } else if (secondArray[0] >= firstArray[sizeFirst - 1]) {
    return [...firstArray, ...secondArray];
  }
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

const arr1 = [-1, 10, 15, 20];
const arr2 = [-1, 0, 5, 16];

console.log(mergeTwoSortedArray(arr1, arr2));
