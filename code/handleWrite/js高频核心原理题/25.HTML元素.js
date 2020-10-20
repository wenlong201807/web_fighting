// 打印出当前网页使用了多少种HTML元素


const fn = () => {
  return [...new Set([...document.querySelectorAll('*')].map(el => el.tagName))].length;
}

// 值得注意的是：DOM操作返回的是类数组，需要转换为数组之后才可以调用数组的方法。