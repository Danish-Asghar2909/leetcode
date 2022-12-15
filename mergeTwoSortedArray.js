var merge = function(nums1, m, nums2, n) {

    let p1 = m - 1 // last index of nums1 array
    let p2 = n - 1 //last index of nums2 array
    let i = m + n -1 // last index of nums1 and nums2 array after combination

    // while(p2 >= 0){

    //     if(p1>=0){
    //     if(nums2[p2] > nums1[p1]){ //if nums2[p2] last value of nums2 array is greater than last value of nums1[p1] than put that value at the end of combine array 
    //         nums1[i] = nums2[p2]
    //         p2--
    //         i--
    //     }else{
    //         nums1[i] = nums1[p1]
    //         i--
    //         p1--
    //     }
    //     }

    // }

    while(p2>=0){
        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1]
            i--
            p1--
        }else{
            nums1[i] = nums2[p2]
            i--
            p2--
        }
    }

    return nums1
};
const nums1 = []
const nums2 = [5]
const m = 0
const n = 1

const result = merge(nums1 , m , nums2 , n)
console.log("Result : ", result)

const v2nums1 = [1,2,3,0,0,0]
const v2nums2 = [1,4,5]
const v2m = 3
const v2n = 3

const v2result = merge(v2nums1 , v2m , v2nums2 , v2n)
console.log("Result v2 : ", v2result)

//We follow here two pointer approach 
//so time complexity is O[N]
//and space complexity is O[1]

//refer this video for better understanding 
//https://youtu.be/C4oBXLr3zos
