// 10. Implement a function that finds the intersection of two arrays.

function getIntersection(firstArray, secondArray) {
  const sizeFirst = firstArray.length;
  const sizeSecond = secondArray.length;
  const [min, max] = [
    Math.min(sizeFirst, sizeSecond),
    Math.max(sizeFirst, sizeSecond),
  ];
  const intersection = new Set();

  for (let i = 0; i < max; i++) {
    for (let j = 0; j < min; j++) {
      if (firstArray[i] === secondArray[j]) {
        intersection.add(firstArray[i]);
        break;
      }
    }
  }
  return intersection;
}

const arr1 = [2, 5, 6, 4, 10];
const arr2 = [5, 4, 3, 10, 10];

console.log(getIntersection(arr1, arr2));
