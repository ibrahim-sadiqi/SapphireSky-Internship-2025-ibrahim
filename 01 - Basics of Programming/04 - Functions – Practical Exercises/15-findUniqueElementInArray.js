// Find Unique Elements in an Array
// Create findUnique(arr), which returns an array with only the unique elements from the input array.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]

function findUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        if (arr[i] === arr[j]) {
          unique = false;
          break;
        }
      }
    }
    if (unique) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));
