// 生命周期图示

// 结论：

// 三个阶段：初始化、更新、销毁
// 初始化：beforeCreate、created、beforeMount、mounted
// 更新：beforeUpdate、updated
// 销毁：beforeDestroy、destroyed

// 使用场景分析

// beforeCreate(){} // 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务 
// created(){ } // 组件初始化完毕，各种数据可以使用，常用于异步数据获取 
// beforeMounted(){ } // 未执行渲染、更新，dom未创建 
// mounted(){ } 初始化结束，dom已创建，可用于获取访问数据和dom元素 
// beforeUpdate(){ } // 更新前，可用于获取更新前各种状态 
// updated(){ } // 更新后，所有状态已是最新 
// beforeDestroy(){ } // 销毁前，可用于一些定时器或订阅的取消 
// destroyed(){ } // 组件已销毁，作用同上