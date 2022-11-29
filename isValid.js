const isValid = (s) =>{
    let tempArr = []
    console.log("S : ", s)
    for(let i = 0 ; i < s.length ; i++){
        switch(s[i]){
            case '(': tempArr.push(')')
            break;
            case '{': tempArr.push('}')
            break;
            case '[': tempArr.push(']')
            break;
            default:
                if(s[i] !== tempArr.pop()){
                    return false
                }
        }
        console.log("TempArr : ", tempArr)
    }

    if(tempArr.length === 0){
        return true
    }else{
        return false
    }

}

const x =  isValid("{([])}")
const y =  isValid("()")
const z =  isValid("((")
console.log("Result is : ", x)
console.log("Result is : ", y)
console.log("Result is : ", z)

//Logic
//let us suppose if we have only - ()
//so in first iteration s[1] we get "(" so we push ")" which means in our tempArr we have [")"]
//then in our second iteration s[2] we get ")" so this is not the case , so the pointer goes to "default"
//in default we are removing item from last "pop" so in tempArr we have [")"] which doesnot matches the condition so it is poped out 
//and last we are checking if array is empty then return true or else false