// 4. Sum of Array Elements (5 Marks)
// Write a function sumArray(numbers) that takes an array of numbers and returns the sum of all the numbers in the array.
// Example:
// Input: sumArray([1, 2, 3, 4])
// Output: 10

function sumArray(numbers){

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));