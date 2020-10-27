// 可继续遍历的数据类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

// 不可遍历的数据类型
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

// 工具函数  通用while循环
function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

// 工具函数  判断是否为引用类型
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

// 工具函数 获取实际类型
function getType(target) {
  return Object.prototype.toString.call(target);
}

// 工具函数 初始化克隆的对象
function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}

// 工具函数 克隆Symbol
function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe));
}

// 工具函数 克隆正则
function cloneReg(targe) {
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
}

// 工具函数 克隆函数
function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      if (param) {
        const paramArr = param[0].split(',');
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}

// 工具函数 克隆不可遍历类型
function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    case funcTag:
      return cloneFunction(targe);
    default:
      return null;
  }
}

function clone(target, map = new WeakMap()) {
  // 克隆原始类型***直接返回
  if (!isObject(target)) {
    return target;
  }

  // 初始化***根据不同类型进行操作
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target, type);
  } else {
    return cloneOtherType(target, type);
  }

  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);

  // 克隆set *** 处理set
  if (type === setTag) {
    target.forEach((value) => {
      cloneTarget.add(clone(value, map));
    });
    return cloneTarget;
  }

  // 克隆map *** 处理map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value, map));
    });
    return cloneTarget;
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = clone(target[key], map);
  });

  return cloneTarget;
}

// 细节处理
// 通过 prototype来区分下箭头函数和普通函数，箭头函数是没有 prototype的。
// 可以直接使用 eval和函数字符串来重新生成一个箭头函数，注意这种方法是不适用于普通函数的。
// 可以使用正则来处理普通函数

// 分别使用正则取出函数体和函数参数，
// 然后使用 newFunction([arg1[, arg2[,...argN]],]functionBody)
// 构造函数重新构造一个新的函数：

// lodash对函数的处理：
const isFunc = typeof value == 'function';

if (isFunc || !cloneableTags[tag]) {
  return object ? value : {};
}

// 这几种类型还需要继续进行递归，我们首先需要获取它们的初始化数据，
//例如上面的[]和 { } ，
//我们可以通过拿到 constructor的方式来通用的获取。

// consttarget={}就是 consttarget=newObject()的语法糖。
/**
 * 另外这种方法还有一个好处：因为我们还使用了原对象的构造方法，
 * 所以它可以保留对象原型上的数据，
 * 如果直接使用普通的 {}，那么原型必然是丢失了的。
 */

function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}

/**
 * 每一个引用类型都有 toString方法，默认情况下，
 * toString()方法被每个 Object对象继承。如果此方法在自定义对象中未被覆盖，
 * toString()返回 "[object type]"，其中type是对象的类型。
 *
 * 注意，上面提到了如果此方法在自定义对象中未被覆盖， toString才会达到预想的效果，
 * 事实上，大部分引用类型比如 Array、Date、RegExp等都重写了 toString方法。
 *
 * 可以直接调用 Object原型上未被覆盖的 toString()方法，
 * 使用 call来改变 this指向来达到我们想要的效果。
 */

function getType(target) {
  return Object.prototype.toString.call(target);
}

// 合理的判断引用类型
// 首先，判断是否为引用类型(数组，对象)都是object，我们还需要考虑 function和 null两种特殊的数据类型：

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

/**
  if(!isObject(target)) {       
     return target;
  }
*/
