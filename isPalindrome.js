// 15. Palindrome Checker (Tricky - 10 Marks)
// Write a function isPalindrome(str) that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward. The function should ignore spaces, punctuation, and capitalization.
// Example:
// Input: isPalindrome("A man, a plan, a canal: Panama")
// Output: true
// Input: isPalindrome("hello")
// Output: false

function isPalindrome(str) {
  
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const len = cleaned.length;
  
  
  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] !== cleaned[len - 1 - i]) {
      return false; 
    }
  }
  
  return true; 
}


console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("hello")); 

