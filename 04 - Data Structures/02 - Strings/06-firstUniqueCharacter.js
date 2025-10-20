// 6. How can you find the first non-repeating character in a string?

function firstUnique(str) {
  const unique = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (Object.hasOwn(unique, str[i])) unique[str[i]] += 1;
      else unique[str[i]] = 1;
    }
  }

  for (const [c, v] of Object.entries(unique)) if (v === 1) return c;
}

console.log(firstUnique("it return first non-repeating character in a string"));
