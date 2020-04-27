/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let len = flowerbed.length
  let i = 0
  while (i <= len) {
    // if (len[0] == 0) {
    //   console.log(2)
    //   if (i == 0 && i + 1 == 0 && i + 2 == 0) {
    //     n = n - 1
    //   }
    // } else {
      if (i == 0 && i + 1 == 0 && i + 2 == 0) {
        n = n - 1
      }
    // }
    i = i + 1
  }
  console.log(n)
  return n == 0
};
let flowerbed = [1, 0, 0, 0, 1]
let n = 1
console.log(canPlaceFlowers(flowerbed, n))