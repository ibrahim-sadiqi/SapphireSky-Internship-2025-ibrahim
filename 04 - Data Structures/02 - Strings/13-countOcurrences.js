// 13. Implement a function to count the number of occurrences of each character in a string.
function countOccurrences(str) {
  const map = new Map();
  for (const char of str) {
    if (char === " ") continue;
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }
  return map;
}

console.log(countOccurrences("count the occurrences"));
