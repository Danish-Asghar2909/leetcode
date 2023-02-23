var lengthOfLongestSubstring = function(s) {
    console.log("s : ", s)
    let lowerIndex = 0
    let higherIndex = 0
    for(let i = 0 ; i < s.length ; i++){
        console.log(s.charCodeAt(i) - 96)

    }
};

const input = "pwwkew"
const output = lengthOfLongestSubstring(input)
console.log("output : ", output)