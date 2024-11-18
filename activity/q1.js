#Given an integer x, return true if x is a palindrome, and false otherwise.
function isPalindrome(x) {
    // Convert the integer to a string
    const str = x.toString();
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}
