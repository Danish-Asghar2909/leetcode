// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const int1 = BigInt( num1 )
    const int2 = BigInt( num2 )

    return (int1 + int2).toString()
};


// const num1 = "456";
// const num2 = "77";
// const output = addStrings(num1, num2);
// console.log("Output : ", output); // Output: "533"

// const num1 = "11";
// const num2 = "123";
// const output = addStrings(num1, num2);
// console.log("Output : ", output); // Output: "134"

const num1 = "9333852702227987";
const num2 = "85731737104263";
const output = addStrings(num1, num2);
console.log("Output : ", output); // Output: "9419584439332250"