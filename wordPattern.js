// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false



/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ")
    if( pattern.length != words.length ) return false
    const wordHash = new Map();
    for( let i = 0 ; i < words.length ; i++ ){
        if( wordHash.has(pattern[i] )){
            if( words[i] !== wordHash.get( pattern[i]) ) return false
        }else{
            if( (wordHash.values()).toArray().indexOf(words[i]) >= 0 ) return false
            if( wordHash.get(pattern[i-1]) &&  wordHash.get(pattern[i-1]) === words[i] ) return false
            wordHash.set(pattern[i] , words[i])
        }
    }
    return true
};

const pattern = "abba", s = "dog cat cat dog"
const output = wordPattern(pattern, s);
console.log("Output : ", output);