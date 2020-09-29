
// 参考资料2 lodash库_.get方法的实现走读【详尽版】
// https://juejin.im/post/6844904005886279693

/**
 * lodash的get方法
 * 参数包含：
 * 1.object (Object): 要检索的对象。
 * 2.path (Array|string): 要获取属性的路径。
 * 3.[defaultValue] (*): 如果解析值是 undefined ，这值会被返回。
 * 
*/
// 举例说明
var object = { 'a': [{ 'b': { 'c': 3 } }] };
_.get(object, 'a[0].b.c');
// => 3
_.get(object, ['a', '0', 'b', 'c']);
// => 3
_.get(object, 'a.b.c', 'default');
// => 'default'


// 拆解实现
/**
* @description 自定义实现lodash.get()
* @param {object} object 传入对象
* @param {path} string 获取路径key
* @return {defaultValue} 默认值结果
* 1.判断了对象为null返回undefined
* 2.baseGet，实际实现也在baseGet中
* 3.第三个参数default 即result为undefined时默认值
*/
function get(object, path, defaultValue) {
  const result = object == null ? undefined : baseGet(object, path)
  return result === undefined ? defaultValue : result
}

/**
* 1.cashPath 实际上就是把字符串转成数组，如果传入的就是数组就直接返回
* 2.tokey 对string类型和Symbol类型的key和数字类型做一层处理
* 3.通过while读取传入的path==>object下的参数
*/
function baseGet(object, path) {
  path = castPath(path, object)

  let index = 0
  const length = path.length

  while (object != null && index < length) {
    object = object[toKey(path[index++])]
  }
  return (index && index == length) ? object : undefined
}

/**
* 1.isKey 判断path是不是当前对象的key
* 2.stringToPath 如果传入的path不是当前对象的key，就调用该方法把字符串转成对应的数组
*/
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value
  }
  return isKey(value, object) ? [value] : stringToPath(value)
}

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 * 1.reIsDeepProp 这个正则匹配 'a[0].b.c' 这类字符串 (ps: 正则我看着就懵)
 * 2.value in Object(object) 就是遍历value在不在当前对象内
 * 3.isSymbol 判断当前对象是不是symbol类型 Object.prototype.toString.call
 */
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false
  }
  const type = typeof value
  if (type === 'number' || type === 'boolean' || value == null || isSymbol(value)) {
    return true
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
}

const charCodeOfDot = '.'.charCodeAt(0)
const reEscapeChar = /\\(\\)?/g
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' + '|' +
  // Or match property names within brackets.
  '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' + '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]'+ '|' +
  // Or match "" as the space between consecutive dots or empty brackets.
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
  , 'g')

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 * 1.memoizeCapped 用来做缓存的
 * 2.通过rePropName正则replace操作 (ps: 这个正则我真有点懵)
 */
const stringToPath = memoizeCapped((string) => {
  const result = []
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }
  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    }
    else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })
  return result
})

