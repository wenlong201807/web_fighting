// - 7.请按照下方要求作答，并解释原理？请解释下babel编译后的async原理(15分)
let a = 0;
let yideng = async () => {
  a = a + await 10;
  console.log(a)
}
yideng();
console.log(++a);



// - 加强一下 
- async function async1 () {
  console.log(1)
  await async2();
  console.log(3)
}
async function async2 () {
  console.log(2)
}
async1();
console.log(4)