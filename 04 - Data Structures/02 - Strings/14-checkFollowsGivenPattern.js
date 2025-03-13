// 14. How do you check if a string follows a given pattern
//  (e.g., "abba" follows "dog cat cat dog")?

function checkPattern(str, pattern) {
  // It has higher time complexity and failed in some cases
  if (str.length === 0 && pattern.length === 0) return;
  const both = [str, pattern.split(" ")];
  const comp = [];
  let count = 1;
  for (let j = 0; j < both.length; j++) {
    let p = [];
    for (let i = 0; i < both[j].length; i++) {
      if (both[j][i] === " ") continue;
      if (both[j][i] === both[j][i + 1]) {
        count++;
      } else {
        p.push(count);
        count = 1;
      }
    }
    comp.push(p);
  }

  return comp[0].join("") === comp[1].join("");
}

function checkPattern2(pattern, str) {
  const words = str.split(" ");
  if (pattern.length !== words.length) return false;

  let char2word = new Map();
  let word2char = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (char2word.has(char) && char2word.get(char) !== word) return false;
    if (word2char.has(word) && word2char.get(word) !== char) return false;

    char2word.set(char, word);
    word2char.set(word, char);
  }
  return true;
}

console.log(checkPattern("abba", "dog cat cat fish"));
console.log(checkPattern2("abba", "dog cat cat dog"));
console.log(checkPattern2("abba", "dog cat cat fish"));
