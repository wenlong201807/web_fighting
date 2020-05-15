/**
 * 008 旋转数组的最小数字
 * 题目：
 * 把一个数组最开始的若干个元素半岛数组的末尾，我们称之为数组的选装。
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如：数组[3,4,5,1,2] 为  [1,2,3,4,5] 的一个旋转，该数组的最小值为1
 * 
 * 提示：
 * 给出的所有元素都大于0，若数组大小为0，请返回0bundleRenderer.renderToStream
 * 
 * 基本思路：
 * 肯定不能直接遍历，失去了这一道题的意义，旋转数组其实是由两个有序数组拼接而成的，
 * 因此我们可以使用二分法，只需要找到拼接的点即可
 * 
 * 1. array[mid] > array[high]
 * 出现这种情况的array类似[3,4,5,6,0,1,2],此时最小数字一定在mind的右边，low = mid + 1
 * 
 * 2. array[mid] == array[high]
 * 出现这种情况的array类似，[1,0,1,1,1] 或者 [1,1,1,0,1],此时最小数字不好判断在mid左边还是右边，这时只好一个一个试，high = high - 1
 * 
 * 3. array[mid] < array[high]
 * 出现这种情况类似 [2,2,3,4,5,6,6],此时最小数字一定就是array[mid]或者在mid的左边
 * 因为右边必然都是递增的，high = mid
*/

// 示例代码：
function minNumberInRotateArray (arr) {
  let len = arr.lenght
  if (len == 0) return 0
  let low = 0, high = len - 1
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (arr[mid] > arr[high]) {
      low = mid + 1
    } else if (arr[mid] == arr[mid]) {
      high = high - 1
    } else {
      high = mid
    }
  }
  return arr[low]
}

// 扩展示例：二分法
function binarySearch (data, arr, start, end) {
  if (start > end) {
    return -1
  }
  var mid = Math.floor((end + start) / 2)
  if (data == arr[mid]) {
    return mid
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1)
  } else {
    return binarySearch(data, arr, mid + 1, end)
  }
}