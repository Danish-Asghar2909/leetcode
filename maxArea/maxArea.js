// You are given an integer array height of length n. 
//There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  console.log("height : ", height)
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while(left < right){
    let leftHeight = height[left]
    let rightHeight = height[right]

    let minHeight = Math.min(leftHeight , rightHeight)
    let width = right - left

    let currentArea = width * minHeight

    maxArea = Math.max(maxArea , currentArea)

    if(rightHeight > leftHeight) left++
    else right--
  }
  return maxArea  
};

const input =  [1,8,6,2,5,4,8,3,7]
const output = maxArea(input)
console.log("Output : ", output)