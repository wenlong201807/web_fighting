
/**
 * https://leetcode-cn.com/problems/container-with-most-water/solution/11zui-da-sheng-shui-liang-by-zhu-wen-long-2/
*/
const initArr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

const SolutionToMaxWater = (arr) => {
  let maxArea = 0
  let curArea = 0
  let i = 0
  let len = arr.length
  let j = len - 1

  while (i < j) {
    if (arr[i] <= arr[j]) {
      curArea = (j - i) * arr[i]
      i++
    } else {
      curArea = (j - i) * arr[j]
      j--
    }
    maxArea = curArea > maxArea ? curArea : maxArea;
  }

  return maxArea
}

console.log(SolutionToMaxWater(initArr))

// const Solution = () =>{
//   public int maxArea(int[] height) {
//       int i = 0;
//       int j = height.length - 1;
//       int maxArea = 0;
//       int area = 0;
//       while(i < j){
//           if(height[i] <= height[j])
//           {
//               area = (j - i) * height[i];
//               i++;
//           }
//           else
//           {
//               area = (j - i) * height[j];
//               j--;
//           }

//           maxArea = area > maxArea ? area : maxArea;
//       }

//       return maxArea;

// }