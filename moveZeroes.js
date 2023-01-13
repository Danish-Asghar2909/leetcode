// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// array.push(array.splice(array.indexOf(element), 1)[0]);


var moveZeroes = function(nums) {
    let arrOnlyContainZero = []
    let arrWithoutZero = []
    for(let i = 0 ; i < nums.length ;i++){
        if(nums[i]===0){
            arrOnlyContainZero.push(nums[i])
        }else{
            arrWithoutZero.push(nums[i])
        }
    }
    //console.log("sample : ", nums , arrOnlyContainZero , arrWithoutZero )
    return [...arrWithoutZero , ...arrOnlyContainZero]
};

const nums = [0,1,0,3,12]
const output = moveZeroes(nums)
console.log("Output : ", output)