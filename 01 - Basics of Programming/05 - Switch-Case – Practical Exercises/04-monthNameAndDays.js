// Input a number (1-12) representing a month.
// Use switch to print the name of the month and how many days it has.

function printDays(m, d) {
  let counter = 0;
  console.log("Sun  Mon  Tue  Wed  Fri  Sat");
  for (let i = 1; i <= d; i++) {
    process.stdout.write(`  ${i} `);
    if (i % 7 === 0) {
      console.log();
      counter = 0;
    }
    counter++;
  }
}

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
const month = 2;
const year = 2025;
switch (month) {
  case 1:
    printDays("Junuary", 31);
    break;
  case 2:
    if (isLeapYear(year)) {
      printDays("February", 29);
    } else {
      printDays("February", 28);
    }
    break;
  case 3:
    printDays("March", 31);
    break;
  case 4:
    printDays("April", 30);
    break;
  case 5:
    printDays("May", 31);
    break;
  case 6:
    printDays("June", 30);
    break;
  case 7:
    printDays("July", 31);
    break;
  case 8:
    printDays("August", 31);
    break;
  case 9:
    printDays("September", 30);
    break;
  case 10:
    printDays("October", 31);
    break;
  case 11:
    printDays("November", 30);
    break;
  case 12:
    printDays("December", 31);
    break;
  default:
    console.log("Invalid number");
}
