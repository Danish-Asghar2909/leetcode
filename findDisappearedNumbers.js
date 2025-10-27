// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    // I'm using Set here because includes method of Set has O(1) time complexity but .inclueds method of Array has O(n) time complexity
    let uniqueArr = new Set(nums)

    let output = []
    for( let i = 1 ; i < n + 1; i++){

        if( !uniqueArr.has(i) ){

            output.push(i)
        }
    }
    return output
};


const nums = [4,3,2,7,8,2,3,1]
const output = findDisappearedNumbers(nums);
console.log("Output : ", output);
