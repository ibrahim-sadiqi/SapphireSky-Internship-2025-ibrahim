// 11. How do you remove duplicates from an array efficiently?

function removeDuplicate(arr) {
  arr.sort((a, b) => a - b); // time complexity O(n log n)
  let i = (j = 0);
  while (i < arr.length && j < arr.length) {
    // O(n)
    if (arr[i] === arr[j]) {
      j++;
    }
    if (arr[i] !== arr[j] && j !== i) {
      arr.splice(i, j - (i + 1)); // worst case O(n)
      i++;
      j = i;
    }
  }
  return arr;
}

function removeDuplicate2(arr) {
  const uniqItem = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // time complexity is O(n)
    if (!uniqItem[arr[i]]) {
      uniqItem[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

function efficientRemove(arr) {
  return [...new Set(arr)];
}

const arr = [1, 2, 3, 1, 3, 4, 5, 2, 1, 10, -1, -1, 0, 0, 10, 10];
console.log(removeDuplicate(arr)); // time complexity here is O(nlogn) + O(n2), and Space complexity O(n1)
console.log(removeDuplicate2(arr));
console.log(efficientRemove(arr)); // SET is the best approach and more efficient
