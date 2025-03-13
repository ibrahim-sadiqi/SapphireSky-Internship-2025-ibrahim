// 8. Implement a function to compress a string using character counts ("aabcccccaaa" → "a2b1c5a3").

function compressString(str) {
  if (str.length === 0) return;
  const comp = [];
  let count = 1;
  let isShort = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
      isShort = false;
    } else {
      comp.push(str[i] + count);
      count = 1;
    }
  }

  return isShort ? str : comp.join("");
}

console.log(compressString("aabcccccaaa"));
console.log(compressString("abbcdd"));
console.log(compressString("abcdf"));
