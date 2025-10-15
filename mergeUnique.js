// 14. Merge and Remove Duplicates (Tricky - 10 Marks)
// Write a function mergeUnique(arr1, arr2) that takes two arrays of numbers, merges them into a single array, and removes any duplicate values. The final array should be sorted in ascending order.
// Example:
// Input: mergeUnique([1, 2, 3], [3, 4, 5])
// Output: [1, 2, 3, 4, 5]

function mergeUnique(arr1, arr2){

    let newArr = arr1.concat(arr2);
    let set = new Set(newArr);

    return Array.from(set);
    
}
console.log( mergeUnique([1, 2, 3, 4], [3, 4, 5]));
