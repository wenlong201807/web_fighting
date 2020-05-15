/**
 * 20200511 数组统计
 * 
 * 数组中有一个数字出现的次数超过数组长度的一半，，请找出来这个数字。
 * 你可以建设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 题目分析
 * 题目假设很重要，数组非空，且一定存在多数的元素。
 * 
 * 解法1：哈希表统计次数
 * 借助哈希表，哈希表的键是数字，值是数字出现的次数。整体流程如下：
 * 
 * 遍历数组，统计数字和出现次数。
 * 遍历哈希表，返回出现次数超过长度一半的数字
 * 
 * 注意：这里要使用ES6 的 Map,不要使用 json对象。因为json对新的键存在着 “隐式类型转换”
 * 所有的键会被专函为字符串，从而导致不易排查的 bug，
 * 代码实现如下：
 * 
*/

var majorityElement = function (nums) {
  const map = new Map()
  const length = nums.length

  nums.forEach(num => {
    const times = map.get(num)
    if (times === 'undefined') {
      map.set(num,1)
    } else {
      map.set(num,times+1)
    }
  });

  for (const key of map.keys()) {
    if (map.get(key) > length / 2) {
      return key
    }
  }

  return 0
}

// 遍历两次，时间复杂度是O(n), 哈希表村塾次数，空间复杂度是 O(n)

// 摩尔投票算法****重点
/**
 * 题目说了，只可能有1个数字的出现次数超过数字长度的一半，也就是说这个数字的出现总数比其他数字出现的次数和还要多。
 * 定义变量 result 和 times 第一次遍历原数组的时候。
 * times = 0,那么 result 等于当前元素，times 变为1
 * times  != 0 且 result != 当前元素，times 减 1
 * times  != 0 且 result = 当前元素，times 加 1
*/

var majorityElement2 = function (nums) {
  let times = 0
  let result = 0
  
  nums.forEach(number => {
    if (times === 0) {
      times = 1
      result = number
    } else if (number === result) {
      times+=1
    } else {
      // number !== result
      times -=1
    }
  })
  return result
}

/**
 * 时间复杂度O(n),空间复杂度O(1) 比解法1更优
 * 题目已经假设了一定存在多数的元素，不需要二次遍历进行确定。
 * 
 * 拓展思考:
 * 如果土木没假设数组中一定存在数目大于一半的元素，
 * 例如 [1,2,3]。此时还需要遍历一遍。统计一下 result 的出现次数
*/