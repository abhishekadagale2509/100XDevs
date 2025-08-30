/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
    
  To Run file -> PS C:\Users\chand\Desktop\100xdevs_2.0\0-1\week1\assignments\mediun> npx jest ./tests/countVowels.test.js

  */

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let cnt = 0;
    
    str.toLowerCase().split('').forEach((char) => {
        if(vowels.includes(char)) {
            cnt++;
        }
    });
    return cnt;
}

module.exports = countVowels;
/*function countVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let cnt = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) {
      cnt++;
    }
  }

  return cnt;
}

module.exports = countVowels;
 */



/*function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {  // use .includes instead of .has
            count++;
        }
    }

    return count; // return the final count
}

console.log(countVowels('abhi'));  // Output: 2 (a, i)
*/
console.log(countVowels("Hello World"));  // 3  (e, o, o)
console.log(countVowels("AEIOU"));        // 5
console.log(countVowels("xyz"));          // 0
