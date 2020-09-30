// 参考资料 ： https://www.jb51.net/article/178851.htm

Array.prototype.my_map = function (callback) {
  if (!Array.isArray(this) || !this.length || typeof callback !== 'function') {
    return []
  } else {
    let result = [];
    for (let index = 0; index < this.length; index++) {
      const element = this[index];
      result.push(callback(element, index, this))
    }
    return result
  }
}

let arr = [1, 2, 3, 4, 5]
let res = arr.my_map((ele, i) => {
  return ele + 10
})
console.log(res)