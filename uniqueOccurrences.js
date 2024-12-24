// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // console.log("Arr : ", arr)
    const cache = new Map()
    for( let i = 0 ; i < arr.length ; i++){
        // console.log("Item : ", arr[i])
        if(cache.has(arr[i])){
            let currentCount = cache.get(arr[i])
            cache.set( arr[i] , currentCount + 1)
        }else{
            cache.set( arr[i] , 1)
        }

    }
    console.log("Map value : ", cache ,cache.entries() , cache.values() , cache.size )
    console.log("Arr : ", Array.from(cache.values()))
    const countArr = Array.from(cache.values())
    const isDuplicate = countArr.filter((item , index) => countArr.indexOf(item) !== index) || []
    console.log("Duplicate : ", isDuplicate)
    return isDuplicate.length > 0 ?  false : true
};
const arr = [1,2,2,1,1,3]; // true
console.log(uniqueOccurrences(arr))