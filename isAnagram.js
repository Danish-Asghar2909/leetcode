// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function(s, t) {
    if(s.split("").sort().join("") === t.split("").sort().join("")){
        return true
    }else{
        return false
    }
};

const s = "rat", t = "car"
const output = isAnagram(s , t)
console.log("Output : ", output)
