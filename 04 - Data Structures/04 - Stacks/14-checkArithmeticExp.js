// 14. Write a function to check if a given arithmetic expression is valid.

import Stack from "./02-implementUsingArray.js";

function isValidExp(ex) {
  let exp = ex.replace(/\s+/g, "");
  const e = new Stack();
  const par = new Stack();

  const checkOperator = (op) => /^[-+*/^]$/.test(op);
  const check = function (item, char) {
    if (char === par.peek()) par.pop();
    else par.push(item);
  };
  for (const c of exp) {
    if (/^[0-9+\-*/^.]$/.test(c)) {
      if ((c !== e.peek() && !e.isEmpty()) || /^[0-9]$/.test(c) || c === ".") {
        if (!e.isEmpty() && checkOperator(e.peek()) && checkOperator(c))
          return false;
        else if (e.peek() !== ".") e.pop();
        else if (e.peek() === "." && checkOperator(c)) e.pop();
        else if (c === "." && (c === e.peek() || checkOperator(e.peek())))
          return false;
        if (c === ".") e.push(c);
      } else e.push(c);
    } else if (/^[()\[\]{}]$/.test(c)) {
      switch (c) {
        case ")":
          check(c, "(");
          break;
        case "]":
          check(c, "[");
          break;
        case "}":
          check(c, "{");
          break;
        default:
          e.pop();
          par.push(c);
      }
    } else return false;
  }
  return e.isEmpty() && par.isEmpty();
}
console.log(isValidExp("-33.333 +5 *( -22 - 1 )"));
