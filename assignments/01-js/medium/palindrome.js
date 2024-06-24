/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let str1 = '';
  str1 = str.split('').reverse().join('');
  console.log(str)
  console.log(str1)
  return str === str1;
}

console.log(isPalindrome("No , oN"));
console.log(isPalindrome("Able, was I ere I saw Elba!"));


module.exports = isPalindrome;
