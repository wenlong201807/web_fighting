// 题目：26.https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483932&idx=3&sn=d354851327ec7f08c8d727f3cf572e4e&chksm=ea911a4cdde6935a77e5df8d9fd832f556ed3ad9fe6af21dba077778c8524877c0055d1fdab6&scene=21#wechat_redirect
// 通关：

/**
 * 题目26：给定一个排序数组，
 * 你需要在原地删除重复出现的元素，
 * 使得每个元素只出现一次，
 * 
 * 
 * 返回移除后数组的新长度。不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:给定数组 nums = [1,1,2], 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。你不需要考虑数组中超出新长度后面的元素。

示例 2:给定 nums = [0,0,1,1,1,2,2,3,3,4],函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。你不需要考虑数组中超出新长度后面的元素。
*/

const nums = [1, 1, 2]
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

const removeDuplicates = nums => {
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === nums[i - 1]) {
      nums.splice(i,1)
      i--
    }
    // if (nums[i] === nums[i + 1]) {
    //   nums.splice(i+1,1)
    //   i--
    // }
  }

  console.log(nums)
  return nums
}

removeDuplicates(nums)