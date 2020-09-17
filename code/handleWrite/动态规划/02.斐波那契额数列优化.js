// 参考资料 https://www.cnblogs.com/star-wind/p/6893212.html

let n = 40

// 斐波那契数列
function recurFib (n) {
  if (n < 2) {
    return n;
  } else {
    //                    document.write("第"+(n-1)+"次计算&nbsp;n-1="+(n-1)+recurFib(n-1)+'&nbsp;&nbsp;&nbsp;');
    //                    document.write("n-2="+(n-2)+recurFib(n-2)+"<br>");
    return recurFib(n - 1) + recurFib(n - 2)
  }
}

// 优化1
function dynFib (n) {
  let val = [];
  for (let i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  else {
    val[1] = 1;
    val[2] = 2;
    for (let i = 3; i <= n; ++i) {
      val[i] = val[i - 1] + val[i - 2];
    }
  }
  return val[n - 1]
}

// 优化2
function iterFib (n) {
  let last = 1;
  let nextLast = 1;
  let result = 1;
  for (let i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}