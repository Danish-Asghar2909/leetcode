// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // s = s.split("")
    // console.log("String : ", s)
    let revString = '' , vowels = 'AEIOUaeiou' , vow ='', i = 0 ;
    for( char of s) {
        if( vowels.includes(char)){
            console.log("Character : ", char)
            vow +=char
        }
    }    
    console.log("Vow : ", vow)
    vow = vow.split("").reverse().join("")
    console.log("Vow : ", vow)
    for( val of s ){
        if( vowels.includes(val) ){
            revString +=vow[i]
            i++
        }else{
            revString += val
        }
    }
    console.log("reverse string : ", revString)
    return revString
};

console.log(reverseVowels("IceCreAm"))