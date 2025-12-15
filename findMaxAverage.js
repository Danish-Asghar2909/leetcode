// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0 , sum = 0 , maxAverage = -Infinity;
    for( let right = 0 ; right < nums.length ; right++ ) {
        sum += nums[right];
        if( right - left + 1 === k ){
            maxAverage = Math.max( maxAverage , sum / k );
            sum -= nums[left];
            left++;
        }
    }
    return maxAverage;
};

    const nums = [1,12,-5,-6,50,3], k = 4
    const output = findMaxAverage(nums, k);
    console.log("Output : ", output);