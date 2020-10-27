/**
 * 解决循环引用问题，我们可以额外开辟一个存储空间，
 * 来存储当前对象和拷贝对象的对应关系，
 * 当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，
 * 如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。
 *
 * 这个存储空间，需要可以存储 key-value形式的数据，且 key可以是一个引用类型，
 * 我们可以选择 Map这种数据结构
 */

// 检查map中有无克隆过的对象
// 有 - 直接返回
// 没有 - 将当前对象作为key，克隆对象作为value进行存储
// 继续克隆

function clone(target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.has(target)) { // 皆可
    // if (map.get(target)) {
      return target;
    }

    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },

  field4: [2, 4, 8],
};

target.target = target;
console.time();
const result = clone(target);
console.timeEnd();

// console.log(clone(target))
