/**
 * @param {string} s
 * @return {string}
 */

const expandFromCenterAndCheck = (str , left , right) =>{
    let i = 0
    while( str[left-i] && str[left - i] === str[right + i] ){
        i++
    }
    i--

    return str.slice(left - i , right + i + 1)
}

var longestPalindrome = function(s) {
    if(s.length < 1 || s === null) return "";

    let longest = ''
    for(let i = 0 ; i<s.length ; i++){
        const oddPalindromes = expandFromCenterAndCheck(s , i , i)
        const evenPalindromes = expandFromCenterAndCheck(s , i - 1 , i)

        if(oddPalindromes.length > longest.length){
            longest = oddPalindromes
        }

        if(evenPalindromes.length > longest.length){
            longest = evenPalindromes
        }

    }

    return longest
};

const input = 'ababcd'
const output = longestPalindrome(input)
console.log("output : ", output)
