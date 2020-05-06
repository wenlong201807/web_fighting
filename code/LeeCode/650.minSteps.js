/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let arr = primeFactors(n)
  console.log(arr)
  let len = arr.length
  let result = 0
  for (let i = 0; i < len; i++) {
    result += arr[i]
  }
  return result
};

console.log(minSteps(8))


// javascript怎么求出一个数的所有素数因子？
//https://segmentfault.com/q/1010000014287015
function primeFactors (n) {
  var factors = [];
  var divisor = 3;
  if (n % 2 == 0) factors.push(2);
  if (n % 3 == 0) factors.push(3);
  if (n % 4 == 0) factors.push(2);
  while (n >= 5) {
    if (n % divisor == 0) {
      !factors.includes(divisor) && factors.push(divisor);
      n = n / divisor;
    }
    else {
      divisor += 2;
    }
  }
  return factors;
};
// console.log(primeFactors(30));




















//js：利用for循环输出某一个范围数字中的所有质数
//https://blog.csdn.net/xuehyunyu/article/details/73730086?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3
function getNum (min, max) {
  //求范围内的所有质数
  var array = new Array();

  //判断是否是质数
  for (var i = min; i = max; i++) {
    var isPrime = true;
    for (var j = 2; j < i; j++) {
      //被2或其他小于它的数字整除就不是质数
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      //true代表是质数
      //向数组中添加这个数字
      array.push(i);
    }
  }
  return array;
}
// console.log(getNum (0, 30))
