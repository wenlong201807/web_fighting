# 手写pormise

## promise 自身的状态

1. state 存放当前的状态
2. value 存放当前的状态的值
3. then 方法，返回值也是一个promise
4. catch方法
5. finally方法
6. 静态方法，如：promise.all promise.resolve  promise.reject

## 实战案例

1. 实现一个promise，再setTime中去resolve。
2. 实现一个promise，直接同步resolve。
3. 实现一个promise，防止resolve多次执行（只能执行第一个resolve）
4. 实现一个promise，可以让then方法链式调用
5. 实现一个promise，支持 空then 调用
6. 实现一个promse，支持 then 传递thenable对象。
7. 实现一个promis，支持 then 传递promis对象
8. 实现一个promise，支持 resolve 传递promise对象。
9. 实现一个promise，处理 then 中的循环 promise。
10. 实现一个promise，支持 静态方法 promise.all 。
11. 实现一个promise，支持 reject 和  catch。
12. 实现一个promise，支持 处理 完成态 或者 失败态的then。