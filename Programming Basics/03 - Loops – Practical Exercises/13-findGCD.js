function gcd(a, b) {
  /*
   This algorithm is inefficient because it iterates based on the given
   number and checks all the numbers that are multiples of both,
   requiring more time to execute. This algorithm is just for practice to
   learn iterators and if-else conditions.
   There are many algorithms, such as the Euclidean Algorithm, that are more efficient.
  */
  let gcd = 0;
  let smaller = 0;
  let larger = 0;

  if (a < b) {
    smaller = a;
    larger = b;
  } else {
    smaller = b;
    larger = a;
  }
  for (let i = 2; i < smaller; i++) {
    if (smaller % i === 0 && larger % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(gcd(270, 192));
