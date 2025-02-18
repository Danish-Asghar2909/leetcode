// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false


/**
 * @param {number} n
 * @return {boolean}
 */

const squareArr = ( arr , prevArr = []) => {
    let sumOfSquare = 0
    console.log("Arr : ", prevArr)
    let arrOfSquareDigits = [...prevArr]
    for( let i = 0 ; i < arr.length ; i++){
        sumOfSquare += arr[i]*arr[i]
    }

    console.log("Arr of Square Digits : ", arrOfSquareDigits)
    if( arrOfSquareDigits.includes(sumOfSquare)){
        return false
    }
    arrOfSquareDigits.push(sumOfSquare)
    if( sumOfSquare === 1){
        console.log("Sum of Square : ", sumOfSquare)
        return true
    }

    console.log("Sum of Square : ", sumOfSquare)
    return squareArr(sumOfSquare.toString().split("") , arrOfSquareDigits)
    
}


var isHappy = function(n) {
    const digits = n.toString().split("")
    console.log("Digits : ", digits)
    const result = squareArr(digits)
    console.log("Result : ", result)
    return result
};

// isHappy(19)
isHappy(2)
