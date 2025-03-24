// 8. Write a function to evaluate a postfix expression using a stack.

import Stack from "./02-implementUsingArray.js";
import infix2Postfix from "./15-infix2postfix.js";

function calcPostfixExp(exp) {
  exp = exp.split(" ");
  const calc = (operator, op1, op2) => {
    let result = 0;
    switch (operator) {
      case "^":
        result = op2 ** op1;
        break;
      case "*":
        result = op2 * op1;
        break;
      case "/":
        result = op2 / op1;
        break;
      case "+":
        result = op2 + op1;
        break;
      case "-":
        result = op2 - op1;
        break;
      default:
        result = NaN;
    }
    return result;
  };
  const result = new Stack();

  for (const c of exp) {
    if (/^[+-]?\d+(\.\d+)?$/.test(c)) {
      result.push(Number(c));
    } else {
      result.push(calc(c, result.pop(), result.pop()));
    }
  }
  return result.peek();
}
console.log(calcPostfixExp(infix2Postfix("(4+3*11)- 2.7/2^4+ (4-1)")));
console.log(4 + 3 * 11 - 2.7 / 2 ** 4 + (4 - 1));
