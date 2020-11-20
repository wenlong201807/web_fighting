/**
 谈一下你对Vue组件化的理解

 定义：组件是可复用的 Vue 实例，准确讲它们是VueComponent的实例，继承自Vue。
 优点：从上面案例可以看出组件化可以增加代码的复用性、可维护性和可测试性。

 使用场景：什么时候使用组件？以下分类可作为参考：
 1.通用组件：实现最基本的功能，具有通用性、复用性，例如按钮组件、输入框组件、布局组件等。
 2.业务组件：它们完成具体业务，具有一定的复用性，例如登录组件、轮播图组件。
 3.页面组件：组织应用各部分独立内容，需要时在不同页面组件间切换，例如列表页、详情页组件

 如何使用组件
 定义：Vue.component()，components选项，sfc
 分类：有状态组件，functional，abstract
 通信：props，$emit()/$on()，provide/inject，$children/$parent/$root/$attrs/$listeners
 内容分发：<slot>，<template>，v-slot
 使用及优化：is，keep-alive，异步组件

 组件的本质
 vue中的组件经历如下过程
 组件配置 => VueComponent实例 => render() => Virtual DOM=> DOM
 所以组件的本质是产生虚拟DOM
*/