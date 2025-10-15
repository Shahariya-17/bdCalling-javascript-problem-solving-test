// 8. Square the Numbers (5 Marks)
// Write a function squareNumbers(numbers) that takes an array of numbers and uses the .map() method to return a new array with each number squared.
// Example:
// Input: squareNumbers([1, 2, 3, 4])
// Output: [1, 4, 9, 16]

function squareNumbers(numbers) {
  return numbers.map(function(num) {
    return num * num;
  });
}

console.log(squareNumbers([1, 2, 3, 4])); 
