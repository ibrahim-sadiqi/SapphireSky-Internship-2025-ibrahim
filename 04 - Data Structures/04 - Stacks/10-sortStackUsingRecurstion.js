// 10. Write a function to sort a stack using recursion.

import Stack from "./02-implementUsingArray.js";

function sortStack(st) {
  if (st.size() === 0) return;
  let top = st.pop();
  sortStack(st);
  let tmp = [];
  while (st.size() > 0 && st.peek() > top) {
    tmp.push(st.pop());
  }
  st.push(top);
  while (tmp.length > 0) {
    st.push(tmp.pop());
  }
}

const s = new Stack();
s.push(20);
s.push(2);
s.push(5);
s.push(10);
s.push(1);
s.push(6);
s.push(4);
sortStack(s);
s.print();
