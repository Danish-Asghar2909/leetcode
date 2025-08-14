// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.
 

// Example 1:

// Input: num = "6777133339"
// Output: "777"
// Explanation: There are two distinct good integers: "777" and "333".
// "777" is the largest, so we return "777".
// Example 2:

// Input: num = "2300019"
// Output: "000"
// Explanation: "000" is the only good integer.
// Example 3:

// Input: num = "42352338"
// Output: ""
// Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.


/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    // console.log("Number : ", typeof num , num)
    // const arrNum = num.split("")
    // let max = null ;
    // // console.log("Arr : ",arrNum )
    // for ( let i = 0 ; i < arrNum.length ; i++ ){
    //     console.log("Arr : ", arrNum[i] , i )
    //     const multipleOfThree = arrNum[i] * 3;
        
    //     if( multipleOfThree === Number(arrNum[i]) + Number(arrNum[i+1]) + Number(arrNum[i+2])){
    //         console.log("got it : ", arrNum[i] , arrNum[i+1] , arrNum[i+2] , (arrNum[i] + arrNum[i+1] + arrNum[i+2]) , (max === null ?  0 : max) )
    //         max = Math.max( (arrNum[i] + arrNum[i+1] + arrNum[i+2]) , (max === null ?  0 : max))
    //         console.log("Max : ", max)
    //     }
    // }
    // console.log("Max : ", max)
    // return max !== null  ? String(max) === "0" ? "000" : String(max)  : ""


    let best = ""
    for( let i = 0 ; i + 2  < num.length ; i++ ){
        if( num[i] === num[i+1] && num[i] === num[i+2]){
            const curr = num.substring( i , i+3 )
            if( curr > best ) best = curr
        }
    }
    return best
};


// Example usage:
const num1 = "6777133339";
const output1 = largestGoodInteger(num1);
console.log("Output 1: ", output1); // Output: "777"

const num2 = "2300019";
const output2 = largestGoodInteger(num2);
console.log("Output 2: ", output2); // Output: "000"


const num3 = "42352338";
const output3 = largestGoodInteger(num3);
console.log("Output 3: ", output3); // Output: ""


const num4 = "000";
const output4 = largestGoodInteger(num4);
console.log("Output 4: ", output4); // Output: "000"