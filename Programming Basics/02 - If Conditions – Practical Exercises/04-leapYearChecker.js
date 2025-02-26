// Leap Year Checker
// A year is a leap year if it is divisible by 4 but not by 100, unless also divisible by 400. Write a program that determines if a given year is a leap year.

let year = 2010;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(`${year} is a leap year!`); // 2000, 2004, 2008, 2012, 2016, 2020, 2024
} else {
  console.log(`${year} is not a leap year!`);
}
