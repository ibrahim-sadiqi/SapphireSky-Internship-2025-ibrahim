// 3. How do you check if an array contains a specific element?

function isExists(element, ...arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return true;
  }
  return false;
}
const arr = [1, 2, 4, 5, 2, 8];
console.log(isExists(4, ...arr));
console.log(isExists("ibrahim", "ali", "mohammad", "ibrahim"));
