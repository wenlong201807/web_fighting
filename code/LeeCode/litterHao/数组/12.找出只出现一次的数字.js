// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484339&idx=1&sn=43a74175f9e68f8218fdc345fec62a1d&chksm=ea911be3dde692f5d9f8fc688b2b76c15b0842c4f5812cff63351518d3ef5c79d618de44acba&scene=21#wechat_redirect
// 通关：

/**
 * 第136题：给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素。
*/

// const nums = [2,2,1]
const nums = [2,2,1,3,1,6,3]

const singleNumber = nums => {
  let result = 0
  for (let i = 0; i < nums.length; i++){
    result ^= nums[i]
  }
  console.log(result)
  return result
}

singleNumber(nums)

/**
 * 位运算中的异或操作
1.任意一个数和0异或仍然为自己
2.任意一个数和自己异或是0
3.异或操作满足交换律和结合律
4.依据归路1，2，3可得：将所有数字连加，最后结果即为只出现一次的
5.返回结果

作者：zhu-wen-long-2
链接：https://leetcode-cn.com/problems/single-number/solution/136zhi-chu-xian-yi-ci-de-shu-zi-by-zhu-wen-long-2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/