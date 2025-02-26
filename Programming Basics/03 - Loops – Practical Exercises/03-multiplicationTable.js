// Multiplication Table
// Ask the user for a number and print its multiplication table up to 10.

const number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${number}: ${i * number}`);
}
