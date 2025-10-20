// 15. Implement a function to convert an infix expression to postfix notation.
import Stack from "./02-implementUsingArray.js";

function prec(c) {
  if (c === "^") return 3;
  else if (c === "/" || c === "*") return 2;
  else if (c === "+" || c === "-") return 1;
  else return -1;
}

function infix2Postfix(exp) {
  let newStr = exp.replace(/\s+/g, "");
  let i = 0;

  let postfix = [];
  const op = new Stack();
  while (i < newStr.length) {
    if ((newStr[i] >= "0" && newStr[i] <= "9") || newStr[i] === ".") {
      let numberDigit = "";
      while (
        (i < newStr.length && newStr[i] >= "0" && newStr[i] <= "9") ||
        newStr[i] === "."
      ) {
        numberDigit += newStr[i];
        i++;
      }
      postfix.push(numberDigit);
      continue;
    } else if (
      (newStr[i] >= "a" && newStr <= "z") ||
      (newStr[i] >= "a" && newStr <= "Z")
    )
      postfix.push(newStr[i]);
    else if (newStr[i] === "(") op.push("(");
    else if (newStr[i] === ")") {
      while (op.peek() !== "(") {
        postfix.push(op.pop());
      }
      op.pop();
    } else {
      while (!op.isEmpty() && prec(newStr[i]) <= prec(op.peek())) {
        postfix.push(op.pop());
      }
      op.push(newStr[i]);
    }
    i++;
  }

  while (!op.isEmpty()) {
    postfix.push(op.pop());
  }
  return postfix.join(" ");
}

export default infix2Postfix;
