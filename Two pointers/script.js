// 1. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

const isPalindrome = (s) => {
    s = s.replace(/\W|_/g, '').toLowerCase()
    let word = s.split('').reverse().join('')
    
    return s === word
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));