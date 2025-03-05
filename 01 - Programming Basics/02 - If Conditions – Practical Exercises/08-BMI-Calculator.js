let weight = 90;
let height = 175;

height /= 100; // Change cm to meter

let BMI = weight / (height * height);
console.log(BMI)
if (BMI >= 30) {
    console.log('Obese');
} else if (BMI >= 25) {
    console.log('Overweight');
} else if (BMI >= 18.5) {
    console.log('Normal');
} else {
    console.log('Underweight');
}