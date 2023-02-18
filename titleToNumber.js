// Given question:
// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// Question Explanation:
// What we have to do here 🤔 ? don't worry, i will explain you guys 😄 !!
// we have return the corresponding column number for given column title.

//     For example:
//         columnTitle = "A"
//         A -> 1
//         👉 here our corresponding column number for given column title is 1.

//         columnTitle = "AB"
//            👉 here we have AB so we have to do means:
//                 A --> 1
//                 B --> 2
//                 .
//                 .
//                 Z --> 26
//                 After this what will come means :
//                 AB --> 1*26 + 2 = 28
//                 AA --> 27

//                  how it came 🤔:
//                  AA --> 1 * 26 + 1 = 27
//             same as above:
//                 AB --> 1 * 26 + 2 = 28

//             Let me give another Example:
//                 columnTitle = "CD"
//                 CD-> 3*26 + 4 = 82

// Code Explanation:
// 1.we have initialized a variable called corresponding_number .
// 2.then we have start looping and get current letter to find corresponding letter value.
// 3.we are going to use one formula.
// corresponding_number += current_Letter_value * pow(26, length_of_string - i- 1)
//     Example: 
//         current_letter = "DA"
//         corresponding_number = 0
//         ⭐ now we going to start looping:
//                 ⭐ i=0
//                 ⭐ current_letter = "D"
//                 ⭐ corresponding_letter_value = 4
//                 ⭐ length_of_string = 2
//                 corresponding_number += 4 * pow(26, 2 - 0 - 1) ==> 4 * 26^1 =104
//                 ⭐ i=1
//                 ⭐ current_letter = "A"
//                 ⭐ corresponding_letter_value = 1
//                 ⭐ length_of_string = 2
//                 corresponding_number += 1 * pow(26, 2 - 1 - 1) ==> 1 * 26^0 = 1
//         now we will return corresponding_number = 104 + 1 = 105

//     Big O:
//         Time Complexity:O(n) where n is the length of string
//         Space Complexity:O(1) constant space


const titleToNumber = (columnTitle) => {
    let corresponding_number = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      const current_letter = columnTitle[i]; // current Letter
      const current_number = current_letter.charCodeAt(0) - 64; // corresponding number 
      // here we are subtracting 64 because we aer going to get only Capital letter so the charCodeAt() returns the ASCII value of the character.
      corresponding_number +=
        current_number * Math.pow(26, columnTitle.length - i - 1);
    }
    return corresponding_number;
  };

const input = 'Z'
const output = titleToNumber(input)
console.log("Output : ", output)