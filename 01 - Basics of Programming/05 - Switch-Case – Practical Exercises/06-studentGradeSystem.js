// Student Grade System
//   Take a student's score (0-100).
//   Use switch to assign a letter grade (A, B, C, D, F).

const score = 90;

function getGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return "A";
    case score >= 80 && score < 90:
      return "B";
    case score >= 70 && score < 80:
      return "C";
    case score >= 60 && score < 70:
      return "D";
    case score >= 0 && score < 60:
      return "F";
    default:
      return "Invalid score";
  }
}

console.log(getGrade(95));
