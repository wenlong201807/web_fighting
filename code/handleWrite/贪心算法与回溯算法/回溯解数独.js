// 参考资料 https://mp.weixin.qq.com/s?__biz=MzI3NzIzMDY0NA==&mid=2247493684&idx=1&sn=4c169cb1451c1a93dc2b37bf1158b1e3&chksm=eb6bcd6fdc1c4479280bde43375e98d07ad9bfa8b09d8cc8d9217a16404a028af3e742398396&mpshare=1&scene=1&srcid=0927gNK70o3FLz6UQZDCVfv1&sharer_sharetime=1601429905355&sharer_shareid=f8d25c6b3b3b5f92cb53a2ecd9878784&key=4598b5ee8f6c4950e07b338119ee33d01036e50e91b5bfd0053375e9299c3a87596583ba7b7b639bb695514f31738c07af4b595761945b40cde59c500d8c363a3d88ff4d4b40e932e7bea987ada1a4d3e17423b4ab133a7a4fc7e92fbfe2b721c67449a4a0d89b2ecbcac1beb308aa07aaf93d86a9f91768b2f4cdc198415905&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=ASD77ZzmotZG%2Fvm5klBMPnM%3D&pass_ticket=AfVjbJJCcQQpPItZWtkUdrqqyF%2BwkZhNMTkIlyXk%2F4NcC6rNuDaY2Z8zhoukiZHn&wx_header=0
// 算法范式 ： https://mp.weixin.qq.com/s?__biz=MzIyNzUwMjc5Ng==&mid=2247484460&idx=2&sn=02f03a6982ab043d46dd08a75d9752ad&scene=21#wechat_redirect

/**
 * 回溯是通过逐步构建解决方案来解决递归问题的算法。
 * 通常回溯从可能的解决方案开始，
 * 如果它不起作用，则需要回溯并尝试另一种解决方案，
 * 直到找到可行的解决方案为止。回溯在解决 CSP（约束满足问题）时特别有用，
 * 例如填字游戏、口算题和数独等。
 * 
 * 通常回溯算法可用于以下三种类型的问题：
 * 1.需要找到可行解决方案的决策问题
 * 2.需要找到最佳解决方案的优化问题
 * 3.需要找到一组可行解决方案的列举问题
 * 在本文中，我将通过解决数独问题来演示回溯策略。
*/

function sudokuSolver (matrix) {
  if (solveSudoku(matrix) === true) {
    return matrix;
  }
  return '无解';
}

const UNASSIGNED = 0;

function solveSudoku (matrix) {
  let row = 0;
  let col = 0;
  let checkBlankSpaces = false;

  // 验证数独是否已解决，如果尚未解决，则获取下一个空格的位置
  for (row = 0; row < matrix.length; row++) {
    for (col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === UNASSIGNED) {
        checkBlankSpaces = true;
        break;
      }
    }
    if (checkBlankSpaces === true) {
      break;
    }
  }
  //当没有空格时则意味着已经解决
  if (checkBlankSpaces === false) {
    return true;
  }

  // 尝试用正确的数字填充空格
  for (let num = 1; num <= 9; num++) {
    // isSafe 用于检查在行、列或 3x3 的格子中是否已经存在了数字 num（代码实现在后面）
    if (isSafe(matrix, row, col, num)) {
      matrix[row][col] = num;

      if (solveSudoku(matrix)) {
        return true;
      }
      // 如果 num 所在的位置不合适，需要再次标记为“空格”，然后用不同的 num 回溯
      matrix[row][col] = UNASSIGNED;
    }
  }
  return false;
}

// 接下来看辅助函数的实现：
function isSafe (matrix, row, col, num) {
  return (
    !usedInRow(matrix, row, num) &&
    !usedInCol(matrix, col, num) &&
    !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
  );
}

function usedInRow (matrix, row, num) {
  for (let col = 0; col < matrix.length; col++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInCol (matrix, col, num) {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox (matrix, boxStartRow, boxStartCol, num) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (matrix[row + boxStartRow][col + boxStartCol] === num) {
        return true;
      }
    }
  }
  return false;
}

// 最后对算法进行测试：
const sudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0], 
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.table(sudokuSolver(sudokuGrid));
