// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    console.log("Nums 1: ", nums1)
    console.log("Nums 2 : ", nums2)
    const uniqueOf1 = new Set(nums1);
    const uniqueOf2 = new Set(nums2);
    const output = []
    for( let item of uniqueOf1 ){
        if( uniqueOf2.has(item)){
            output.push( item )
        }
    }
    console.log("Result : ", output)
    return output;
};



const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
const output = intersection(nums1, nums2);


console.log("Output : ", output); // Output: [9,4] or [4,9] is also accepted


// const nums1 = [1,2,2,1];
// const nums2 = [2,2];
// const output = intersection(nums1, nums2);
// console.log("Output : ", output); // Output: [2]