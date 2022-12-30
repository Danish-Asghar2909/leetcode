var fizzBuzz = function(n) {
    let result = []
    for(let i = 1 ; i < n + 1 ; i++){
        if(i % 3 === 0 && i % 5 === 0 && i !== 0){
            result.push('FizzBuzz')
        }else if(i % 3 === 0 && i % 5 !== 0){
            result.push("Fizz")
        }else if(i % 3 !== 0 && i % 5 === 0){
            result.push("Buzz")
        }else{
            result.push(i.toString())
        }
    }
    return result
};

const n = 15
const output = fizzBuzz(n)
console.log("Output : ", output)