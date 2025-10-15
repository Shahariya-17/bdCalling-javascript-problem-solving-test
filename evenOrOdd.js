// 2. Even or Odd (5 Marks)
// Write a function isEvenOrOdd(number) that takes an integer and returns the string "Even" if the number is even, and "Odd" if the number is odd.
// Example:
// Input: isEvenOrOdd(10)
// Output: 'Even'

function isEvenOrOdd(number){
    
    if(number % 2 === 0){
        return "Even"
    }

    else{
        return "Odd"
    }
}

console.log(isEvenOrOdd(10));