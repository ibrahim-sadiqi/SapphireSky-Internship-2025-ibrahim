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
  let j = (i = 0);
  while (i < firstArray.length && j < secondArray.length) {
    if (secondArray[j] <= firstArray[i]) sortedArray.push(secondArray[j++]);
    else sortedArray.push(firstArray[i++]);
  }

  if (i < firstArray.length) sortedArray.push(firstArray[i]);
  if (j < secondArray.length) sortedArray.push(secondArray[j]);
  return sortedArray;
}

const arr1 = [-1, 10, 15, 20];
const arr2 = [-1, 0, 5, 16, 30];

console.log(mergeTwoSortedArray(arr1, arr2));
