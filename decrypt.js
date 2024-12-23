// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

 

// Example 1:

// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
// Example 2:

// Input: code = [1,2,3,4], k = 0
// Output: [0,0,0,0]
// Explanation: When k is zero, the numbers are replaced by 0. 
// Example 3:

// Input: code = [2,4,9,3], k = -2
// Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.



/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k === 0) return new Array(code.length).fill(0)
    let copyOfK = k
    if( k < 0 ) {
        k = k * -1
        code = code.reverse()
    }
    console.log("Code : ", code)
    console.log("Window size : ", k)
    let newLinearArr = [...code , ...code]
    console.log("New Linear Array : ", newLinearArr)
    let sum = 0, maxSum = 0;
    let result = [];

    for( let i = 0 ; i < newLinearArr.length  ; i++ ){
        sum = sum + newLinearArr[i]
        if( i >= k ){
            // maxSum = maxSum + sum
            console.log("Start calculation" , i , k , " Sum : ", sum , i - k ,"Max Sum : ", maxSum ," value at [i - k] ", newLinearArr[i-k]  )
            result.push(sum - newLinearArr[i - k])
            sum = sum - newLinearArr[i - k]
        }
    }
    console.log("Result : ", result , copyOfK ,  (copyOfK - code.length) , (code.length - k))
    return  copyOfK > 0 ? result.slice(0, (copyOfK - code.length)) : result.reverse().slice((code.length - k))
};

// const code = [5,7,1,4] , k = 3 ; //[ 12, 10, 16, 13 ]
const code = [2,4,9,3] , k = -2 ; // [ 12, 5, 6, 13 ]
// const code = [1,2,3,4] , k = 0;
// const code = [5,2,2,3,1] , k = 3; //[ 7, 6, 9, 8, 9 ]


console.log(decrypt(code , k))