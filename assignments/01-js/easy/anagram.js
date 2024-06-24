/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if (str1.length != str2.length){
      return false;
    }
    let str_1 = str1.toLowerCase().split('');
    let str_2 = str2.toLowerCase().split('');
    str_1.sort();
    str_2.sort();
    return str_1.join('') === str_2.join('');

}
let val = isAnagram('hello', 'lhelo')
console.log(val)  

module.exports = isAnagram;
