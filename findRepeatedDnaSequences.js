// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const sizeOfWindow = 10;
    let map = new Map();
    let result = [];
    for ( let i = 0 ; i <= s.length - sizeOfWindow ; i++ ){
    const subString = s.substring( i , i + sizeOfWindow );
        if( map.has( subString )){
            if( map.get( subString ) === 1){
                result.push( subString )
            }
            map.set( subString , map.get(subString) + 1)
        }else{
            map.set( subString , 1 )
        }
    }
    return result
};

// Example usage:
const s1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const output1 = findRepeatedDnaSequences(s1);
console.log("Output 1: ", output1); // Output: ["AAAAACCCCC","CCCCCAAAAA"]

const s2 = "AAAAAAAAAAAAA";
const output2 = findRepeatedDnaSequences(s2);
console.log("Output 2: ", output2); // Output: ["AAAAAAAAAA"]

