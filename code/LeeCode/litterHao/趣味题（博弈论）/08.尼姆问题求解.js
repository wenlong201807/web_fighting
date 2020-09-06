// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484323&idx=1&sn=1ee2b0c36f516266d49a914b00c84aa8&chksm=ea911bf3dde692e5c069248a097db81bf3d985c47a2107da9fc47f4fab7f769aec6741af15a9&scene=21#wechat_redirect


/**
 * 
*/

// 通关：https://leetcode-cn.com/problems/nim-game/solution/292nimyou-xi-by-zhu-wen-long-2/

const n = 6

const canWinNim = n => {
  return n % 4 != 0
}

console.log(canWinNim(n))