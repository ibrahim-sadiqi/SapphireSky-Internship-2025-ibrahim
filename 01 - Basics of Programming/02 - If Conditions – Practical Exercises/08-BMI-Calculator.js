// Body Mass Index (BMI) Calculator
// Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
// Categorize it into:
// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30

let weight = 90;
let height = 175;

height /= 100; // Change cm to meter

let ibm = weight / (height * height);
console.log(ibm);
if (ibm >= 30) {
  console.log("Obese");
} else if (ibm >= 25) {
  console.log("Overweight");
} else if (ibm >= 18.5) {
  console.log("Normal");
} else {
  console.log("Underweight");
}
