// 6. Reverse an Array (10 Marks)
// Write a function reverseArray(arr) that takes an array and returns a new array with the elements in reverse order. Do not use the built-in .reverse() method.
// Example:
// Input: reverseArray([1, 2, 3, 4])
// Output: [4, 3, 2, 1]

function reverseArray(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[newArr.length] = arr[i]; 
  }

  return newArr;
}

console.log(reverseArray([1, 2, 3, 4])); 
