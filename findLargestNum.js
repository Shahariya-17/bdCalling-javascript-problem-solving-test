// 5. Find the Largest Number (5 Marks)
// Write a function findLargest(numbers) that takes an array of numbers and returns the largest number in the array.
// Example:
// Input: findLargest([5, 2, 8, 1, 9])
// Output: 9

function findLargest(numbers) {
  numbers.sort((a, b) => b - a); 
  return numbers[0];
}

console.log(findLargest([5, 2, 8, 1, 9])); 

