/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArr = [...nums1 , ...nums2]
    mergedArr.sort((a , b) => a-b)
    console.log("Merged Array : ", mergedArr)
    if(mergedArr.length === 1) return mergedArr[0]
    if(mergedArr.length % 2 === 0){
        console.log("It is even")
        return ((mergedArr[mergedArr.length / 2] + mergedArr[(mergedArr.length / 2) - 1] )/ 2)
    }else{
        console.log("it is odd", Math.round(mergedArr.length / 2) - 1, mergedArr.length)
       return (mergedArr[(Math.round(mergedArr.length / 2) - 1)])
    }
};

const nums1 = [2,3], nums2 = [1,4,5,6,7]
const output = findMedianSortedArrays(nums1 , nums2)
console.log("Output : ", output)