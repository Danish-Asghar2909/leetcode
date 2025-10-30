// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = '';
    for(let i = 0; i < s.length; i += 2 * k) {
      console.log("I : ", i ," : ",  s.slice(i, i + k) ," : ", s.slice(i, i + k).split("") ," : ",  s.slice(i, i + k).split("").reverse("") , s.slice(i, i + k).split("").reverse("").join(""))
      console.log("Second Part : ", s.slice(i + k, i + 2 * k) , "\n" )
      let firstPart = s.slice(i, i + k).split("").reverse("").join("");
      let secondPart = s.slice(i + k, i + 2 * k);
      result += firstPart + secondPart
    
  }
  return result
  
  };

    const s = "abcdefg", k = 2
    const output = reverseStr(s, k);
    console.log("Output : ", output);