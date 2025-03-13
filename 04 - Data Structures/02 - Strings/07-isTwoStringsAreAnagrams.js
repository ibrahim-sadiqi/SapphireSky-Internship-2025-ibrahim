// 7. Write a function to check if two strings are anagrams.

function isAnagrams(str1, str2) {
  str1 = str1.replaceAll(" ", "").toLowerCase();
  str2 = str2.replaceAll(" ", "").toLowerCase();

  if (str1.length !== str2.length) return false;
  const map = new Map();

  for (let char of str1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let char of str2) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) map.delete(char);
  }

  return map.size === 0;
}

console.log(isAnagrams("hello word", "her woodll"));
