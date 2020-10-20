
// 支持 async/await
Array.prototype.myforeach = async function (fn, context = null) {
  let index = 0;
  let arr = this;
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  while (index < arr.length) {
    if (index in arr) {
      try {
        await fn.call(context, arr[index], index, arr);
      } catch (e) {
        console.log(e);
      }
    }
    index++;
  }
};