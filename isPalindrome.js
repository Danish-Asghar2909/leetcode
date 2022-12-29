var isPalindrome = function(s) {
   
    const stringWithoutSymbols = s.replace(/[^a-z0-9]+/gi, '').toLowerCase();

    const splittedString = stringWithoutSymbols.split('').reverse().join('')

    if(stringWithoutSymbols === splittedString){
        return true
    }else{
        return false
    }
    
};

//const Input = "A man, a plan, a canal: Panama";
// const Input = "race a car"
const Input = "ab_a"
const output = isPalindrome(Input)


console.log("Output : ", output)