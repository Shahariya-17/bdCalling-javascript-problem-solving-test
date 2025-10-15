// 9. Filter Out Negative Numbers (5 Marks)
// Write a function filterPositive(numbers) that takes an array of numbers and uses the .filter() method to return a new array containing only the positive numbers.
// Example:
// Input: filterPositive([1, -2, 3, -4, 5])
// Output: [1, 3, 5]

function filterPositive(numbers) {
  return numbers.filter(function(num) {
    return num > 0; 
  });
}

console.log(filterPositive([1, -2, 3, -4, 5]));
