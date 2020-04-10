/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 作者：heronwan
// 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/jsyong-slicehe-spliceqing-song-jie-jue-by-heronwan/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var removeDuplicates = function(nums) {
  let len=nums.length;

  for(let i=1;i<len;){ 
      //slice(i,j) 截取下标i开始，下标j（不包括）结束的子数组
      if(nums.slice(0,i).indexOf(nums[i])!==-1){// 重复项
          nums.splice(i,1);//删除下标从i开始的，长度为1的子数组
          len--;
      }
      else i++;
  }
  return len;
};

