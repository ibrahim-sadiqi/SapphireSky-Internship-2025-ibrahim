// 5. Write a function to check if a given string has balanced parentheses.

import Stack from "./02-implementUsingArray.js";

function isBalance(str) {
  const check = function (item, char) {
    if (char === stack.peek()) stack.pop();
    else stack.push(item);
  };
  const stack = new Stack();
  for (const item of str) {
    switch (item) {
      case ")":
        check(item, "(");
        break;
      case "]":
        check(item, "[");
        break;
      case "}":
        check(item, "{");
        break;
      default:
        stack.push(item);
    }
  }
  return stack.isEmpty();
}

export default isBalance;
