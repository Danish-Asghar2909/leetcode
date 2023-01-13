// var intersect = function(nums1, nums2) {
//     let tempArr = []
//     for(let i = 0 ; i < nums1.length ; i++){
//         for(j =0 ; j < nums2.length ; j++){
//             if(nums1[i] === nums2[j]){
                
//                 nums2.splice(j,1)
//                 //nums1.splice(i,1)
//                 tempArr.push(nums1[i])
//             }
//         }
//     }
//     return tempArr
// };


var intersect = function(nums1, nums2) {
   
  return nums1.reduce((a, c) => {
    
    if (nums2.includes(c)) {
      a = [...a, c];
      nums2.splice(nums2.indexOf(c), 1);
    }

    return a;
  }, []);

};


const nums1 = [4,9,5] ,nums2 =[9,4,9,8,4]
const Output = intersect(nums1 , nums2)
console.log("Output : ", Output)