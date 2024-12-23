// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let result = false;
    t = t.split("")
    let indexOfSequence = 0
    t.forEach((chr)=>{
        // console.log("Char : ", chr)
        // console.log(s.includes(chr))
        // if(s.includes(chr)){
        //     s = s.slice(1)
        // }
        if(s[indexOfSequence] === chr ){
            indexOfSequence++
        }
    })
    // console.log("S : ", s)
    // console.log("T : ", t)
    if(s.length === indexOfSequence ){
        result = true
    }else{
        result = false
    }
    return result
};

// const s = 'abc' , t = 'ahbgdc' // Pass
const s = 'rjufvjafbxnbgriwgokdgqdqewn' , t = 'mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq'
console.log(isSubsequence(s , t))