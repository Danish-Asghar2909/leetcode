// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".


/**
 * @param {string} s
 * @return {number}
 */

const checkIfEveryWordUnique = ( s ) =>{
    const exactWord = s;
    const unique = new Set(s)
    console.log("1 : ", exactWord )
    console.log(" 2 : ", unique , unique.size)
    if( s.length === unique.size ) return exactWord
    return false
}
var countGoodSubstrings = function(s) {
    console.log("String : ", s)
    let arrOfSubSet = [];
    const sizeOfSubSet = 3;
    for( let i = 0 ; i < s.length + 1 - sizeOfSubSet ; i++ ){
        // console.log("words : " ,i ," - ",s[i])
        if(checkIfEveryWordUnique(s.slice(i ,  sizeOfSubSet + i ))) arrOfSubSet.push(s.slice(i ,  sizeOfSubSet + i ))
    }
    console.log("Arr : ", arrOfSubSet)
    return arrOfSubSet.length
};

const s = "aababcabc";
const output = countGoodSubstrings(s);
console.log("Output : ", output); // Output: 4

// const s = "xyzzaz";
// const output = countGoodSubstrings(s);
// console.log("Output : ", output); // Output: 1