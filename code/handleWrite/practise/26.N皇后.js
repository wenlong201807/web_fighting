// 参考资料 http://kscccisu.cn:8090/blog/18
// 回溯算法

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var t = [],
    temp = [],
    res = [];
  // 1、构建空棋盘
  for (let i = 0; i < n; i++) {
    t.push(0);
  }
  for (let i = 0; i < n; i++) {
    // 注意不能直接temp.push(t),直接赋值的话为浅拷贝，新数组只是原对象的一个引用
    temp.push([...t]);
  }

  // 2、判断当前位置能否摆放
  var judge = function (i, j, n) {
    //横
    for (let k = 0; k < n; k++) {
      if (temp[i][k] == 1) return 0;
    }
    //竖
    for (let k = 0; k < n; k++) {
      if (temp[k][j] == 1) return 0;
    }
    //斜
    for (let k = 1; k + j < n && i - k >= 0; k++) {
      if (temp[i - k][j + k] == 1) return 0;
    }
    for (let k = 1; k + i < n && j - k >= 0; k++) {
      if (temp[i + k][j - k] == 1) return 0;
    }
    for (let k = 1; k + i < n && j + k < n; k++) {
      if (temp[i + k][j + k] == 1) return 0;
    }
    for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
      if (temp[i - k][j - k] == 1) return 0;
    }
    return 1;
  }
  //深搜遍历
  var dfs = function (e, n) {
    for (let i = 0; i < n; i++) {
      if (temp[e][i] == 0 && judge(e, i, n)) {
        temp[e][i] = 1;
        if (e == n - 1) {
          var ans = [];
          for (let i1 = 0; i1 < n; i1++) {
            var a = "";
            for (let i2 = 0; i2 < n; i2++) {
              if (temp[i1][i2] == 0) a += " 口 ";
              else a += " Q ";
            }
            ans.push(a);
          }
          res.push(ans);
        } else {
          dfs(e + 1, n);
        }
      }
      temp[e][i] = 0;
    }
  }
  dfs(0, n); // 默认开始从第一行遍历
  return res;
};


console.table(solveNQueens(4))
// solveNQueens(4)

// let aa = {
//   a: 1,
//   b: 2,
//   k: [1, 2, 3],
//   f: {
//     s: 3,
//     ee: [1, [5,8], {pp: 6 }]
//   }
// }

// let aa = [
//   [1,2,3],
//   [1,2,3],
//   [1,2,3],
// ]
// console.table(aa)