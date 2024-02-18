// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    console.log("Word : ", word1),
    console.log("Word 2 : ", word2)
    const arr1 = word1.split("")
    const arr2 = word2.split("")
    console.log("arr1 : ", arr1)
    console.log("arr2 : ", arr2)
    let finalArr = []
    let totalLength = arr2.length;
    if(arr1.length > arr2.length){
        totalLength = arr1.length
    }
    for( let i = 0 ; i < totalLength ; i++){
        arr1[i] ? finalArr.push(arr1[i]) : null
        arr2[i] ? finalArr.push(arr2[i]) : null
    }
    console.log(finalArr.join(""))
    return finalArr.join("")
};

const word1 = "abc", word2 = "pqr"
const output = mergeAlternately( word1 , word2)
console.log("Output : ", output)