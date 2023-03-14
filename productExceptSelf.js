// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



/**
 * @param {number[]} nums
 * @return {number[]}
 */

const getMultipliedValue = (arr , pos) =>{
    let result = 1
    for(let i = 0 ; i < arr.length ; i++){
      if(i === pos) continue
      result = result * arr[i]
    }
    return result
  }
  
  var productExceptSelf = function(nums) {
      let result = []
      for(let i = 0 ; i < nums.length ; i++){
        const ans = getMultipliedValue(nums , i)
        result.push(ans)
      }
      return result
  };
  
  let prices =  [1,2,3,4]
  const output = productExceptSelf(prices)
  console.log("target : ", output)