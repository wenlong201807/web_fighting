
#  上一节课的

-  函数执行堆栈
   +  GC global execution context 全局上下文对象 golbalContext
   +  EC execution context 执行上下文
   +  Callee Stack  函数执行栈
   +  ECS execution context Stack 执行上下文栈
   +  AO  Activation Object 活动对象
   +  VO  Variable Object 变量对象
   +  GC  Garbage Collection 垃圾回收

ECStack = [
  globalContext
]

+ 闭包的原理   -  随着外层函数执行出栈  closure(foo)
+ this的原理   -  函数执行上下文  动态绑定  EC
+ 作用域链Scope  - [AO,GC,VO] 
+ eval  不能被回收，绑定到了全局词法作用域  AO
+ 异步队列  node  libuv  宿主实现的eventloop  macrotask  microtask