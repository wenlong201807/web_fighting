// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484373&idx=1&sn=282aaae8a1b180e5a20fe8894071f4a1&chksm=ea911b85dde6929322ee07664066de1904aa1d0400f2ffb5e72bd034aff6a3e4369ab23950ec&scene=21#wechat_redirect

// 思路很简单，细节是魔鬼

/**
 * 二分查找是计算机科学中最基本、最有用的算法之一。它描述了在有序集合中搜索特定值的过程。
 * 一般二分查找由以下几个术语构成：
 * 1.目标 Target —— 你要查找的值 
 * 2.索引 Index —— 你要查找的当前位置 
 * 3.左、右指示符 Left，Right —— 我们用来维持查找空间的指标 
 * 4.中间指示符 Mid —— 我们用来应用条件来确定我们应该向左查找还是向右查找的索引
 * 
 * 如何来构造一个成功的二分查找。大部分的二分查找，基本都由以下三步组成：
 * 1.预处理过程（大部分场景就是对未排序的集合进行排序）
 * 2.二分查找过程（找到合适的循环条件，每一次将查找空间一分为二）
 * 3.后处理过程（在剩余的空间中，找到合适的目标值）
*/

// mid 使用 low + (high - low)/2 的目的，是防止 high+low 溢出内存。

const array = [2, 3, 4, 5, 6, 7, 8, 9]
const des = 6
// const des = 5

const binarySearch = (array, des) => {
  array = array.sort((a, b) => a - b)
  let low = 0
  let high = array.length - 1
  let i = 0

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    console.log(i, low, mid, high)
    if (des === array[mid]) {
      return mid
    } else if (des < array[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
    i++
  }

  return -1
}

// console.log(binarySearch(array, des))

/**
 * 总结一下一般实现的几个条件：
 * 1.初始条件：left = 0, right = length-1
 * 2.终止：left > right
 * 3.向左查找：right = mid-1
 * 4.向右查找：left = mid+1
 * 
 * */


// 实战测试
const piles = [3, 6, 7, 11], H = 8

const minEatingSpeed = (piles, H) => {
  let maxVal = 1

  // 获取数组中最大值
  for (let i = 0; i < piles.length; i++) {
    maxVal = Math.max(maxVal, piles[i])
  }

  let left = 1
  let right = maxVal

  while (left < right) {
    let mid = (left + right) >> 1;
    // let mid = Math.floor((left + right) / 2)

    if (canEat(piles, mid, H)) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left

}

const canEat = (piles, speed, H) => {
  let sum = 0
  for (let i = 0; i < piles.length; i++) {
    sum += (piles[i] + speed - 1) / speed
  }
  return sum > H
}

console.log(minEatingSpeed(piles, H))
