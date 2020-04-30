/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return  (n&(n-1))==0
  // return n >0 && (n&(n-1))==0
  // return n > 0 && (n & (n - 1) == 0)
  // console.log((n & (n - 1))==0)
  // if (n > 0 && (n & (n - 1)) == 0) {
  //   return true
  // }
  // return false
};
console.log(isPowerOfTwo(-16))
// var isPowerOfTwo = function (n) {
//   let nn = parseInt(Math.abs(n))
//   let i = 0
//   let res = 0
//   while (i <= 32) {
//     res = 2 ** i
//     if (res == nn) {
//       return true
//     } else {
//       i++;
//     }
//   }
//   return false
// };
// console.log(isPowerOfTwo(-16))