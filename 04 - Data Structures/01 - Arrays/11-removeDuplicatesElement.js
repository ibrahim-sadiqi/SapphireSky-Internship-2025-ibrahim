// 11. How do you remove duplicates from an array efficiently?

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

function removeDuplicate2(arr) {
  const uniqItem = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqItem[arr[i]]) {
      uniqItem[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
const arr = [1, 2, 3, 1, 3, 4, 5, 2, 1];
console.log(new Set(arr)); // SET is the best approach and more efficient
console.log(removeDuplicate2(arr));
console.log(removeDuplicate(arr));
