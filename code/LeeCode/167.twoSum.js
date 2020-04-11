/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 */
/**
1.获取数组长度，使用while循环遍历
2.目标值与当前索引对应的值相减，获取另一个值，假设为big
3.判断big是否也存在与原数组中
4.如果存在，并且其索引值大于当前的i
5.返回当前索引值和big所对应的索引值
*/
function twoSum (numbers, target) {
  let len = numbers.length
  let i = 1
  while (i < len) {
    let big = target - numbers[i - 1]
    console.log('big:', big, i)
    let bigIndex = numbers.lastIndexOf(big)
    console.log('bigindex', bigIndex)
    if (bigIndex > i) {
      return [i, bigIndex]
    }
    i = i + 1
  }
};
// let numbers = [2, 7, 11, 15]
// let target = 9
let numbers = [3, 24, 50, 79, 88, 150, 345]
let target = 200
// let numbers = [0,0,3,4]
// let target = 0
console.log(twoSum(numbers, target))