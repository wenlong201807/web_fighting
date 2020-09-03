// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483902&idx=1&sn=641d151a2efbdfcf04dfc85af8e339b9&chksm=ea9119aedde690b8d9f75b1871ac075d47d326a663bf4c8f94023e97617ab6ec4ca3c68ab081&scene=21#wechat_redirect
// 通关：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/350liang-ge-shu-zu-de-jiao-ji-by-zhu-wen-long-2/

/**
 * 第350题：给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]

示例 2:
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
*/

let nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]

const intersect1 = (nums1, nums2) => {
  let map = new Map()
  let resultArr = []

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i]) + 1)
    } else {
      map.set(nums1[i], 1)
    }
  }
  console.log('==;', map)

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
      resultArr.push(nums2[i])
      map.set(nums2[i], map.get(nums2[i]) - 1)
    }
  }
  console.log(map)
  console.log(resultArr)
  return resultArr
}

// intersect1(nums1, nums2)

/**
 * 题目在进阶问题中问道：
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？我们分析一下，假如两个数组都是有序的，
 * 分别为：arr1 = [1,2,3,4,4,13]，arr2 = [1,2,3,9,10]
*/

let arr1 = [1, 2, 3, 4, 4, 13], arr2 = [1, 2, 3, 9, 10]

const intersect2 = (nums1, nums2) => {
  let i = 0
  let j = 0
  let resultArr = []

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      resultArr.push(nums1[i])
      i++
      j++
    }
  }

  console.log(resultArr)
  return resultArr
}

intersect2(arr1, arr2)




