var reverse = function(x) {
    console.log(2**31 - 1 , x , (2**31 - 1) *-1)
    if(!x) return false
    
    if(x.toString().split("").reverse().join().replaceAll(',', '').includes("-")){
        if(x > 2 ** 31 -1) return 0
        const answer = parseInt(x.toString().split("").reverse().join().replaceAll(',', '')) * -1
        if(answer < (2 ** 31 -1) * -1) return 0
        return answer
    }
    const answer = parseInt(x.toString().split("").reverse().join().replaceAll(',', ''))
    if(answer > 2 ** 31 -1) return 0
    return answer
}
const input = -310
const output = reverse(input)
console.log("Output : ", output)