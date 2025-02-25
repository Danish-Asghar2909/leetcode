// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

 

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

/**
 * @param {number[]} nums
 * @return {number}
 */

const sumOfArr = (arr) =>{
    return arr.reduce((sum , i )=>{
        return sum+i
    }, 0)
}
// var pivotIndex = function(nums) {
//     let leftSum = 0;
//     let rightSum = 0;
//     let tempArr = [] 
//     let index 
//     for( let i = 0 ; i < nums.length ; i++){
//         console.log("Value : ", nums[i])
//         leftSum += nums[i-1] || 0
//         for( let j = i + 1 ; j < nums.length ; j++){
//             console.log("Value after index : ", nums[j])
//             tempArr.push(nums[j])
//             // rightSum = sumOfArr(nums[j])
//         }
//         console.log("Temp Arr : ", tempArr)
//         rightSum= sumOfArr(tempArr)
//         console.log("Right Sum ",rightSum) 
//         console.log("Left Sum : ", leftSum)  
//         if( leftSum === rightSum ) {
//             index = i
//             break
//         }
//         tempArr = []
//     }
//     console.log("INdex is : ", index)
//     return index === 0 ? index : index || -1
// };

var pivotIndex = function(num){
    let leftSum = 0
    let rightSum = 0
    const totalSum = sumOfArr(num)
    let index 
    console.log("Total sum : ", totalSum)
    for( let i = 0 ; i< num.length ; i++ ){
        console.log("Num : ", num[i], i)
        rightSum = totalSum -leftSum
        leftSum += num[i] 
        console.log("Right Sum : ", rightSum)
        console.log("Left Sum : ", leftSum)
        if( leftSum === rightSum ){
            index = i
            break;
        }
    }
    return index === 0 ? index : index || -1

}
// const num = [1,7,3,6,5,6] // 3
// const num = [1,2,3] //-1
const num = [2,1,-1] // 0
console.log(pivotIndex(num))

