// 2. How do you count the number of vowels in a string?

function countVowels(str) {
  const newStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Count a string vowels"));
