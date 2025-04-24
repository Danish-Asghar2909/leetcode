// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    console.log("S : ", s)
    console.log("T : ", t)
    if(s === t) return true 
    let ans = true
    const uniq = new Map();
    for( let i = 0 ; i < s.length ; i++ ){
        console.log("S : ", s[i] , uniq)
        if( uniq.has(s[i])){
            console.log("Found : ", uniq.get(s[i]) , " : ", s[i] , " : ", uniq , " : ",i)
            //check if same value in current index 
            if( t[i] === uniq.get(s[i])){
                console.log("Value is Same ")
                ans = true
                // return true
            }else{
                console.log("Value is not same ")
                ans = false
                // return false
            }
        }else{
            uniq.set(s[i] , t[i])
        }
    }
    const result = isIsomorphic(t,s)
    return ans === result ? result : ans
};

const t = 'badc' , s = 'baba';
// const s = 'ab' , t = 'ac';
// const s = 'aaeaa' , t = 'uuxyy';
// const s = 'egg' , t = 'add';
// const s = 'foo' , t = 'bar';

console.log(isIsomorphic( s , t ))