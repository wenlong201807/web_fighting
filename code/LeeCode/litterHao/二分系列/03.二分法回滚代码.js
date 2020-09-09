// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484386&idx=1&sn=4e66e9835aaf9192a0cf254e3b5fa328&chksm=ea911bb2dde692a4937c31a026bcb927109b3d4165853646d071920474e33e3e34e2d97fca98&scene=21#wechat_redirect

// 测试 https://leetcode-cn.com/problems/first-bad-version/

let arr = [true, true, true, false, false, false, false, false]
let n = arr.length

const firstBadVersion = n => {
  let left = 1
  let right = n

  while (left < right) {
    let mid = Math.floor((right + left) / 2)
    // let mid = Math.ceil((right + left) / 2)
    // let mid = left + Math.ceil((right-left)/2)
    console.log(left, mid, right)
    if (isBadVersion(mid)) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

const isBadVersion = version => {
  console.log(arr[version])
  return arr[version]
}

console.log(firstBadVersion(n))