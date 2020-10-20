/**
 * 3个步骤：
 * 1.以`ctor.prototype`为原型创建一个对象。
 * 2.执行构造函数并将this绑定到新创建的对象上。
 * 3.判断构造函数执行返回的结果是否是引用数据类型，若是则返回构造函数执行的结果，否则返回创建
*/


function newOperator (ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new TypeError('Type Error');
  }
  const obj = Object.create(ctor.prototype);
  const res = ctor.apply(obj, args);

  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
}
