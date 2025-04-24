// An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

 

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
 

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    console.log("N : ", n)
    if(n <= 0) return false;
    if(n === 1) return true;
    let factors = [2, 3, 5];
    for(let i = 0; i < factors.length; i++) {
        while(n % factors[i] === 0) {
            n /= factors[i];
        }
    }
    console.log("Final N : ", n)
    return n === 1;
};

const input = 6;
const output = isUgly(input);
console.log(`Input: ${input}`);
console.log(`Output: ${output}`);