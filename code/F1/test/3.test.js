// 3.请问变量a会被GC回收么，为什么呢？(12分)
function test () {
  var a = "yideng";
  return function () {
    eval("");
  }
}
test()();