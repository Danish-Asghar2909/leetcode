var plusOne = function(digits) {
    // console.log("Digit : ", digits)
    // const tempInt = BigInt(digits.join('')) + 1n
    // console.log("TempInt : ", tempInt)
    // return Array.from(String(tempInt) , Number)

    let sum = BigInt(digits.join('')) + 1n
    console.log("Sum : ", sum , typeof sum)
    return sum.toString().split('')
};

//const input = [1,2,3]
const input =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const x = plusOne(input)
console.log("Result : ", x)

// here if we use parseInt to convert it is converting to wrong int 
// that is why we are using bigint to convert 