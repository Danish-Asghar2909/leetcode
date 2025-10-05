// Input :
// N = 4
// arr[] = {"bana","apple","banaba","bonanzo"}
// S = "banana"
// Output :
// True
// Explanation: 
// banana and banaba has only one character 
// different.

const compareString = ( str1, str2 ) =>{
    if( str1.length !== str2.length ) return false
    for( let i = 0 ; i < str1.length ; i++){
        if( str1[i] !== str2[i] ) return true
    }
    return false
}

const arr = ["bana","apple","banaba","bonanzo"], str = "banana";
const arr1 = ["bana","apple","banaba","bonanzo"] , str2 = "apple"
const findIsMismatch = (arr , str) =>{
    for( let i = 0 ; i < arr.length ; i++ ){
        if(compareString( arr[i], str )) return true
    }
    return false;
}
console.log("Output : ", findIsMismatch( arr , str))
console.log("Output : ", findIsMismatch( arr1 , str2))