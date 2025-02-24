function countVowels(str) {
  let count = 0;
  const isVoweles = function (chr) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for (let i = 0; i < vowels.length; i++) {
      if (chr === vowels[i]) {
        return true;
      }
    }
  };
  for (let i = 0; i < str.length; i++) {
    if (isVoweles(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("checkCountofStringsVowels")); // 7
