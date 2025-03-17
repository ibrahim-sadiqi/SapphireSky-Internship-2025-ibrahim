// Print Prime Numbers from 1 to 100
// Use a loop inside another loop to check for prime numbers in a range.

function printPrimeRange(start, end) {
  while (start <= end) {
    let isPrime = true;
    for (let i = 2; i < start; i++) {
      if (start % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      process.stdout.write(` ${start}`);
    }
    start++;
  }
}

printPrimeRange(1, 100);
