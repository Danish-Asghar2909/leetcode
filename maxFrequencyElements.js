// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

 

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    // console.log("Nums : ", nums)
    const hashMap = new Map()
    for( item of nums ){
        // console.log("items : ", item)
        if( hashMap.get(item)){
            const currentCount = hashMap.get(item);
            hashMap.set(item , currentCount + 1)
        }else{
            hashMap.set(item , 1)
        }
    }
    console.log("HashMap : ", Array.from(hashMap.values()))
    const frequency = Array.from(hashMap.values())
    const highestValue = Math.max(...frequency)
    console.log("highestValue : ", highestValue)
    const output = frequency.reduce((acc, item)=>{
        
        if( item === highestValue ) {
            console.log("Item :  ", item)
            acc+=item
        }
        return acc
    },0)
    console.log("Output : ",output)
    return output
};

const nums = [1,2,2,3,1,4]
maxFrequencyElements(nums)
const output = maxFrequencyElements(nums)
console.log("Final Output : ", output)

