// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

var missingNumber = function (nums) {
  nums.sort(function(a, b){return a - b});
//   console.log("length : ", nums);
  if (!nums.sort(function(a, b){return a - b}).includes(0)) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
    //   console.log("num : ", nums[i] ," : ", nums[i]+1 , " : ", i)
      return nums[i] + 1;
    }
  }
};

// const nums = [0, 1]
const nums = [
  45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
  4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
  25, 47, 0, 31, 42, 24, 10, 14,
];
const output = missingNumber(nums);
console.log("Output : ", output);
