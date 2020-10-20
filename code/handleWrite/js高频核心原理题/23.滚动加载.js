// 原理就是监听页面滚动事件，分析clientHeight、scrollTop、scrollHeight三者的属性关系。

window.addEventListener('scroll', function() {
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  if (clientHeight + scrollTop >= scrollHeight) {
    // 检测到滚动至页面底部，进行后续操作
    // ...
  }
}, false);

// 一个Demo：页面滚动加载的Demo
