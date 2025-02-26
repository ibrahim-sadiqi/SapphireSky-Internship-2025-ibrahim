// Speeding Ticket Calculator
// Speed limit = 60 km/h.
// If a driver goes above the speed limit, they get a fine.
// If they are driving over 100 km/h, they get double the fine.
// Implement a program that takes speed as input and determines the fine.

const speedLimit = 60; // km/h
let speed = Number(prompt("Enter the speed:"));

if (speed > 100) {
  console.log("Your speed is over 100km/h, you should pay double fine.");
} else if (speed > speedLimit) {
  console.log(`Your speed is over ${speedLimit}, you should pay fine.`);
}
