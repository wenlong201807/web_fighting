function removeDuplicates(nums) {
  var len = nums.length - 1
  for (var i = 0; i < len; i++){
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
      continue
    } else {
      nums.splice(nums.lastIndexOf(nums[i]), 1)
      i = i-1
    }
  }

  return nums
};

let arr = [1, 1, 1, 1]
console.log(removeDuplicates(arr))