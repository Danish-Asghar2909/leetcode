// var firstUniqChar = function(s) {
//     const tempArr = s.split('')
//     const map = new Map()
//     for(let i = 0 ; i < tempArr.length ; i++){
//         if(map.has(tempArr[i])){
//             console.log("I : ", i , map.has(tempArr[i]) , tempArr[i])
//             map.delete(tempArr[i])
//         }else{
//         map.set(tempArr[i] , i)
//         }
    
// };

// console.log("Map : ", map , map.values().next().value)
// if(map.values().next().value >= 0){
//     return map.values().next().value
// }else{
//     return -1
// }
// }

var firstUniqChar = function(s) {
    let tempArr = s.split('')

    let index 
    for(let i = 0 ; i < tempArr.length ; i++){
        let isFound = false
       
        index = i
        for(let j = 0 ; j < tempArr.length ; j++){
            
            if(tempArr[i] === tempArr[j] && i !== j){
                
                isFound = true
                
                break
            }
        }
        if(!isFound){
            return index
        }
    }
    return -1
}

// const s = 'aadadaad'
// const output = firstUniqChar(s)
// console.log("Output : ", output)

const s1 = 'aabb'
const output1 = firstUniqChar(s1)
console.log("Output : ", output1)