// 1456. Maximum Number of Vowels in a Substring of Given Length
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.



/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(["a","e","i","o","u"])
    let left = 0 , vowelCount = 0 , maxVowel = 0;
    for( let right = 0 ; right < s.length ; right++ ){
        if( vowels.has(s[right]) ){
            vowelCount++
        }
        if( right - left + 1 === k ){
            maxVowel = Math.max( maxVowel , vowelCount )
            if( vowels.has(s[left])){
                vowelCount--
            }
            left++
        }
    }
    return maxVowel
};


    const s = "abciiidef", k = 3
    const output = maxVowels(s, k);
    console.log("Output : ", output);