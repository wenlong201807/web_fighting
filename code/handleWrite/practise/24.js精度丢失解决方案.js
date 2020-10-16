// 参考资料  https://www.cnblogs.com/littlestart/p/6023976.html
// 参考资料  每个计算机科学家都应了解的浮点运算法则
// https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html


// 1.JS 数字丢失精度的原因
// 1.解决方案
// 0.1 + 0.2
console.log((0.1*10 + 0.2*10) / 10 === 0.3) // true