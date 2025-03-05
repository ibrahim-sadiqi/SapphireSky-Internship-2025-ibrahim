let score = 50;

function gradeCalculator(score) {
    if (score > 100 || score < 0) {
        return 'Invalid score number!';
    }
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }

}
