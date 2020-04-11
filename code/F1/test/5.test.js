// - 5.请写出如下代码执行结果 
{
  var a = 1;
  const b = 2;
  function test () { }
  test = 3;
  console.log(typeof test)
}
console.log(a)
console.log(typeof test)
console.log(b)