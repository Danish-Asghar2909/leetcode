//Here you get a positive integer as a input
// int = 4294967293 -> 11111111111111111111111111111101
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 00000000000000000000000000001011 has a total of thirty '1' bits.

//Algo
// 1- convert number to bit [toString(2)]
// 2- make it array [.split('')]
// 3- we need only 1 [.filter(num => num ===1)]
// 4- length of 1's [.length]

var hammingWeight = function(n) {
    if(!n) return 0
    return n.toString(2).split('').filter((bit)=> bit === '1').length
};

const input = 4294967293
const output = hammingWeight(input)
console.log("output : ", output)