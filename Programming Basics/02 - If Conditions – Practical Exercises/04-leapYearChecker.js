let year = 2010

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(`${year} is a leap year!`); // 2000, 2004, 2008, 2012, 2016, 2020, 2024
} else {
    console.log(`${year} is not a leap year!`);
}