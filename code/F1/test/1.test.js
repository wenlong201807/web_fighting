// 自我测试

// 1.请写出如下代码输出值，并解释为什么。(5分)
console.log(a); // undefined
// console.log(typeof yideng(a)); // TypeError: yideng is not a function
var flag = true;
if (!flag) {
  var a = 1;
}
if (flag) {
  function yideng (a) {
    yideng = a;
    console.log("yideng1");
  }
} else {
  function yideng (a) {
    yideng = a;
    console.log("yideng2");
  }
}

if (true) {
  function aa () { // 提升为全局
    console.log(66)
  }
}

