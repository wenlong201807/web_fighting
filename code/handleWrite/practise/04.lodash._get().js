// 实现lodash.get功能
// 参考资料 https://www.cnblogs.com/milo-xie/p/6602031.html
// 类似lodash.get可以按path来取对象的值，同时也支持预设值，如下：


/**
 * 好东西，有点复杂
 */

function deepGet (object, path, defaultValue) {
  return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path)
    .reduce((o, k) => (o || {})[k], object) || defaultValue;
}

var obj = { 'a': [{ 'b': { 'c': 3 } }] };

var result = deepGet(obj, 'a[0].b.c');
console.log(result);
// => 3

result = deepGet(obj, ['a', '0', 'b', 'c']);
console.log(result);
// => 3

result = deepGet(obj, 'a.b.c', 'default');
console.log(result);
// => 'default'