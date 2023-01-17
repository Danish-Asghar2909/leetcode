// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = function(nums) {
    nums.sort(function(a,b) {return a - b})
   
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]  === nums[i + 1]){

            return true
        }
    }
    return false
};

const nums = [2,3,1]
const output = containsDuplicate(nums)
console.log("Output : ", output)