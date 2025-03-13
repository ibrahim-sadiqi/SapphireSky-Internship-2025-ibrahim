// 12. Write a function to find all permutations of a given string.

function perm(s, begin, result, depth) {
  let end = s.length - 1;

  if (begin === end) {
    result.push(s.join(""));
    console.log(result);
  } else {
    for (let i = begin; i <= end; i++) {
      [s[begin], s[i]] = [s[i], s[begin]];
      console.log(
        `${depth} ${"  ".repeat(depth)}${s[begin]} <---> ${
          s[i]
        }  ${s} ${begin} ${i} `
      );
      perm(s, begin + 1, result, depth + 1);
      [s[begin], s[i]] = [s[i], s[begin]];
    }
  }
}

function generatePermutation(str) {
  const s = [...str];
  const result = [];
  perm(s, 0, result, 0);
  return result;
}

console.log(generatePermutation("ABC")); // Space complixity is n factorial
