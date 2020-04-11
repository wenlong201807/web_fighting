// 9.请先书写如下代码执行结果，并用ES5实现ES6 Promise A+规范的代码，同时你能解
// 释下如何使用Promise完成事物的操作么？(10分) 

const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    })
    console.log(2);
    resolve(3);
  })
  innerpro.then(res => console.log(res));
  resolve(4);
  console.log("yideng");
})
pro.then(res => console.log(res));
console.log("end");