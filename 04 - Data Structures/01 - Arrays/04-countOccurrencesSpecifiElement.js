// 4. Write a function to count the occurrences of a specific element in an array.

function countSpecificElement(element, arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) if (element === arr[i]) counter++;
  return counter;
}

const arr = [1, 2, 4, 3, 2, 0, 2];
console.log(countSpecificElement(2, arr));
