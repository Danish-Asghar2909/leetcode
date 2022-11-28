var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]) , i]
        }else{
            map.set(nums[i], i)
        }   
    }
};

const nums = [3,2,4];
const target = 6

const x = twoSum(nums , target)
console.log("X : ", x)