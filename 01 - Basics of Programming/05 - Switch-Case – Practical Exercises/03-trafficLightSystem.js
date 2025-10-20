// Take a traffic light color ("red", "yellow", "green") as input.
// Use switch to print the corresponding action:
// "Red" → "Stop"
// "Yellow" → "Slow Down"
// "Green" → "Go"

function trafficLightColor(color) {
  switch (color) {
    case "Red":
      return "Stop";
    case "Yellow":
      return "Slow Down";
    case "Green":
      return "Go";
    default:
      return "Invalid Color!";
  }
}

console.log(trafficLightColor("Red"));
