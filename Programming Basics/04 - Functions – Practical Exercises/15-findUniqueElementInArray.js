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
