// 15. Palindrome Checker (Tricky - 10 Marks)
// Write a function isPalindrome(str) that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward. The function should ignore spaces, punctuation, and capitalization.
// Example:
// Input: isPalindrome("A man, a plan, a canal: Panama")
// Output: true
// Input: isPalindrome("hello")
// Output: false

function isPalindrome(str){
    let lower = str.toLowerCase()
    let newStr = ''
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < str.length; i++) {
        if (letters.includes(lower[i])) {
            newStr += lower[i]
        }
    }
    
    if (newStr === newStr.split('').reverse().join('')) {
        return true;
    }
    
    else{
        return false;
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("hello"));

