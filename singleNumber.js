var singleNumber = function(nums) {
    console.log("Nums : ", nums)
    const result = nums.reduce((a,b) => a^b , 0)
    return result
};

const Input = [2,2,1,1,4]
const output = singleNumber(Input)
console.log("Output : ", output)

// Here ^ is XOR which means it compare two value in there Binary bits and return 0 if the value is Same 
// example 

// 5^5 return 0
// 0^5 return 5
// 0^0 return 0
// 1^1^2 return 2
//1^1^2^2^4 return 4