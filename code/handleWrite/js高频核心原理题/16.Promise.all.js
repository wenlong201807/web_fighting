// Promise.all是支持链式调用的，本质上就是返回了一个Promise实例，通过resolve和reject来改变实例状态。

Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let index = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then(res => {
          ans[i] = res;
          index++;
          if (index === promiseArr.length) {
            resolve(ans);
          }
        })
        .catch(err => reject(err));
    }
  })
}
