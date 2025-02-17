const speedLimit = 60; // km/h
let speed = Number(prompt('Enter the speed:'));

if (speed > 100) {
    console.log('Your speed is over 100km/h, you should pay double fine.');
} else if (speed > speedLimit) {
    console.log(`Your speed is over ${speedLimit}, you should pay fine.`);
}
