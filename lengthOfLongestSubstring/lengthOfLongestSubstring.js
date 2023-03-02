var lengthOfLongestSubstring = function (s) {
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    let start = 0
    let end = 0
    let maxSize = 0
  
    let uniqueChar = new Set()
    while (end < s.length){
        if(!uniqueChar.has(s[end])){
            uniqueChar.add(s[end])
            end++
            maxSize = Math.max(maxSize , uniqueChar.size)
        }else{
            uniqueChar.delete(s[start])
            start++
        }
    }
    
    return maxSize
  }

const input = "abcabcbb"
const output = lengthOfLongestSubstring(input)
console.log("Output : ", output)


