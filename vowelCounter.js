// 3. Vowel Counter (5 Marks)
// Write a function countVowels(str) that takes a string and returns the number of vowels (a, e, i, o, u, both lowercase and uppercase) in the string.
// Example:
// Input: countVowels("Hello World")
// Output: 3

function vowelCounter(str){
    const vowel = "aeiouAEIOU";
    let count = 0;

    for( let i = 0; i < str.length; i++){
        if(vowel.includes(str [i])){
            count++;
        }
    }
    return count++;
}

console.log(vowelCounter("Hello World"));