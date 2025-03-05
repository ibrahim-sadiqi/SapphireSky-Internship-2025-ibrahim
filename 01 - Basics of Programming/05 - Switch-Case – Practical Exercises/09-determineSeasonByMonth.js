// Determine Season by Month
//      Take an integer (1-12) as input.
//      Use switch to print the corresponding season:
//          12, 1, 2 → Winter
//          3, 4, 5 → Spring
//          6, 7, 8 → Summer
//          9, 10, 11 → Fall

function determineSeason(month) {
  switch (true) {
    case month === 12 || month === 1 || month === 2:
      return "Winter";
    case month === 3 || month === 4 || month === 5:
      return "Spring";
    case month === 6 || month === 7 || month === 8:
      return "Summer";
    case month === 9 || month === 10 || month === 11:
      return "Fall";
    default:
      return "Invalid month!";
  }
}

console.log(determineSeason(4));
