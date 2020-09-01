/**
 * https://mp.weixin.qq.com/s?__biz=MzA4NDE4MzY2MA==&mid=2647520430&idx=2&sn=5a993872960502602c69fcc791517597&chksm=87d24badb0a5c2bbaee04f75401ba97f7f4a4edec02a065105d987b16463af5213be995d3989&mpshare=1&scene=1&srcid=0820ybdKQn78owM9Es0GvJ1K&sharer_sharetime=1597905589596&sharer_shareid=f8d25c6b3b3b5f92cb53a2ecd9878784&key=4bdaf1520bf406e79a239b0155c34f71f90c6770e670d4dca7190cf3e34330248fdf488c6f309126f1c4572171d956c37d92ee64366ac17d7b820b24988d1d2ad0eb7f73a7f7bef8d7b8b6d521068c2bf00dd86608cbe26dd669eac3d98ca499bd497fabccf87495fe1451eb233d2f0a59b3820599a91e45775425adeb80a628&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=AZRaT%2B2PqsqhKsjSPxk4FTo%3D&pass_ticket=wCaM9om9RuyxCjKfaPE3Dm8pESFd0F15REWs78qwfVlmx1ru6DFoGQmZIrPnl0C6
 * LeetCode.27 移除元素
 * 给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 题目链接：https://leetcode-cn.com/problems/remove-element
 * 
*/
let ipExp = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.()){3}$/
let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2
const removeElement1 = (nums, val) => {
  // nums = nums.sort((a, b) => a - b)
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      if (i != j) {
        nums[i] = nums[j];
      }
      i++;
    }
  }
  console.log(nums)
  return i;
}

// removeElement1(nums, val)

const removeElement2 = (nums, val) => {
  // nums = nums.sort((a, b) => a - b)
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] == val) {
      nums[i] = nums[j];
      j--;
    }
    else {
      i++;
    }
  }
  console.log(nums, i)
  return i;
}

removeElement2(nums, val)