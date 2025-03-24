// 6. Implement a function to reverse a string using a stack.
import Stack from "./02-implementUsingArray.js";

function reverse(str) {
  const stack = new Stack();
  for (const item of str) {
    stack.push(item);
  }

  let newStr = "";
  while (!stack.isEmpty()) newStr += stack.pop();

  return newStr;
}

const s = "abcd";
console.log(reverse(s));
