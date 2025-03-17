// 13. How do you check if two arrays are equal?

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const arr1 = [4, 3, 2, 10];
const arr2 = [4, 3, 2, 10];

console.log(isEqual(arr1, arr2));
