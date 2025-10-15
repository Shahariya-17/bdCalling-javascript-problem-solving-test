// 1. Grade Calculator (5 Marks)
// Write a function calculateGrade(score) that takes a numerical score from 0 to 100 and returns a letter grade based on the following scale:
// 90-100: 'A'
// 80-89: 'B'
// 70-79: 'C'
// 60-69: 'D'
// 0-59: 'F'
// Example:
// Input: calculateGrade(85)
// Output: 'B'

function calculationGrade(score) {

    if (score >= 90 && score <= 100) {
        return "A";
    }

    else if (score >= 80 && score <= 89) {
        return "B";
    } 

    else if (score >= 70 && score <= 79) {
        return "C";
    } 

    else if (score >= 60 && score <= 69) {
        return "D";
    } 
    
    else if (score >= 0 && score <= 59) {
        return "F";
    } 
}

console.log(calculationGrade(85)); 
