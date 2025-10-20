// 10. Write a function to check if a string contains only unique characters.

function isUnique(str) {
  const uniqueChar = new Set();
  for (let char of str.toLowerCase()) {
    if (char === " ") continue;
    if (uniqueChar.has(char)) return false;
    uniqueChar.add(char);
  }
  return true;
}

console.log(isUnique("I am ali john"));
