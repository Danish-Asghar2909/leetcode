// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

/**
 * @param {string} digits
 * @return {string[]}
 */
const L = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let answer = [];
  let strLength = digits.length;

  const depthFirstSearch = (position, str) => {
    if (position === strLength) answer.push(str);
    else {
      let letters = L[digits[position]];
      for (let i = 0; i < letters.length; i++) {
        depthFirstSearch(position + 1, str + letters[i]);
      }
    }
  };
  depthFirstSearch(0, "");
  return answer;
};

const input = "23";
const output = letterCombinations(input);
console.log("Output : ", output);
