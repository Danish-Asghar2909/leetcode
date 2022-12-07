var mySqrt = function(x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;
    //console.log("Right : ", right)
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      //console.log("Mid : ", mid)
      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
  
    return right;
};
const input = 4
const x = mySqrt(input)
console.log("Result : ", x)