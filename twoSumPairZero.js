// // Two sum -Pairs with 0 Sum
// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 1]]
// Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
// arr[2] + arr[4] = 1 + (-1) = 0.
// The distinct pair are [-1,1].

const arr = [-1, 0, 1, 2, -1, -4];
const arr1  = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5]
const pairWIthZeroSum = ( arr ) => {
    console.log("Arr : ", arr)
    const map = new Map();
    let output = [];
    for( let i = 0 ; i < arr.length ; i++){
        console.log("Num : ",( -1 * (arr[i])) , map.has( -1 * (arr[i])) , map.get( -1 * (arr[i]) ))
        if( map.has( -1 * (arr[i])) ){
            output.push([ ( -1 * (arr[i]))  , arr[i] ])
        }else{
            map.set( arr[i] , i)
        }
    }
    return output
}

console.log("Output : ", pairWIthZeroSum( arr ))
console.log("Output : ", pairWIthZeroSum( arr1 ))