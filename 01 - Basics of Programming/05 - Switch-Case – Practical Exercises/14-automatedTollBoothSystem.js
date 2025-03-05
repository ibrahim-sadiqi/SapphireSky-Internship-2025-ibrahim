// Automated Toll Booth System
//      Take a vehicle type ("Car", "Truck", "Bike") as input.
//      Use switch to determine the toll fee.

function getTollFee(vehicleType) {
  switch (vehicleType.toLowerCase()) {
    case "car":
      return "AFN 100.0";
    case "truch":
      return "AFN 200.0";
    case "Bike":
      return "AFN 10.0";
    default:
      return "Invalid";
  }
}

console.log(getTollFee("Car"));
