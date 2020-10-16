// 参考资料 https://blog.csdn.net/Twinkle_sone/article/details/108854997

function clone (origin, target) {
  var target = target || {};
  for (var key in origin) {
    target[key] = origin[key];//直接赋值每一项
  }
  return target;
}

function deepClone (origin, target) {
  var target = target || {},
    toStr = Object.prototype.toString,
    //Object.prototype.toString.call(origin[key]):判断对象类型
    arrType = '[object Array]';//数组类型
  //遍历每一个属性
  for (var key in origin) {
    //判断是否是prototype上的属性
    if (origin.hasOwnProperty(key)) {
      //不是原型上的
      if (typeof (origin[key]) === 'object' && origin[key] !== null) {
        //是引用类型
        if (toStr.call(origin[key]) === arrType) {
          //是数组
          target[key] = [];
        } else {
          //是对象
          target[key] = {};
        }
        //递归拷贝
        deepClone(origin[key], target[key]);
      } else {
        //对应key赋值
        target[key] = origin[key];
      }
    }
  }
  return target;
}