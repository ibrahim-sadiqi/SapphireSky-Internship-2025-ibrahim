// 15. Write a function to add two numbers represented as linked lists.

import LinkedList from "./linkedList.js";

LinkedList.prototype.addTwoList = function (lst) {
  let firstLst = this.first;
  let secondLst = lst.first;

  let firstDigits = "";
  let secondDigites = "";
  while (firstLst) {
    firstDigits += firstLst.data;
    firstLst = firstLst.next;
  }

  while (secondLst) {
    secondDigites += secondLst.data;
    secondLst = secondLst.next;
  }

  let sum = Number(firstDigits) + Number(secondDigites);
  const total = new LinkedList();
  sum = String(sum);
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] === "-") {
      total.push(Number(sum[i] + sum[i + 1]));
      i++;
    } else {
      total.push(Number(sum[i]));
    }
  }
  return total;
};
