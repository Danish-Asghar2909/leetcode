var isPowerOfThree = function(n) {
if(n === 0 ) return false
if( n === 1 ) return true

if(n%3 === 0) return isPowerOfThree(n / 3)

return false
};

const input = 29;
const Output = isPowerOfThree(input)
console.log("Output : ", Output)