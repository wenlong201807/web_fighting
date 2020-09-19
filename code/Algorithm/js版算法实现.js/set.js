// 集合类封装
function Set () {
  // 属性
  this.item = {}

  // 方法
  // add 方法
  Set.prototype.add = function (value) {
    //  判断当前集合中是否已经包含了该元素
    if (this.has(value)) {
      return false
    }

    // 将元素添加到集合中
    this.item[value] = value
    return true
  }

  //has
  Set.prototype.has = function (value) {
    return this.item.hasOwnProperty(value)
  }

  // remove
  Set.prototype.remove = function (value) {
    // 1.判断集合中是否包含该元素
    if (!this.has(value)) {
      return false
    }

    // 2.将元素从属性中删除
    delete this.item[value]
    return true
  }

  // clear
  Set.prototype.clear = function () {
    this.item = {}
  }

  // size
  Set.prototype.size = function () {
    return Object.keys(this.item).length
  }
  // value
  Set.prototype.values = function () {
    return Object.values(this.item)
  }

  // 集合间的操作
  // 并集
  Set.prototype.union = function (otherSet) {
    // this : 集合对象A
    // otherSet 集合对象B
    // 1. 创建新的集合
    var unionSet = new Set()

    // 2.将A集合中广度所有的元素添加到新集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    //3.取出B集合中的元素，判断是否需要家到新集合中
    values = otherSet.values()
    for (var j = 0; j < values.length; j++) {
      unionSet.add(values[j])
    }

    return unionSet
  }

  //交集
  Set.prototype.intersection = function (otherSet) {
    // this : 集合对象A
    // otherSet 集合对象B
    // 1. 创建新的集合
    var intersectionSet = new Set()

    //2.将A中的一个个元素进行遍历，判断是否属于B集合，如果是，则放入新的集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++){
      var item = values[i]
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    }
    return intersectionSet
  }

  //差集
  Set.prototype.difference = function (otherSet) {
    // this : 集合对象A
    // otherSet 集合对象B
    // 1. 创建新的集合
    var differenceSet = new Set()

    //2.将A中的一个个元素进行遍历，判断是否属于B集合，如果不是，则放入新的集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++){
      var item = values[i]
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }
    return differenceSet
  }

  //子集
  Set.prototype.subset = function (otherSet) {
    // this : 集合对象A
    // otherSet 集合对象B
    //2.将A中的一个个元素进行遍历，如果发现，集合A中的元素，在集合B中不存在，那么返回false
    // 如果遍历完了整个集合，依然没有返回false，那么返回true即可
    var values = this.values()
    for (var i = 0; i < values.length; i++){
      var item = values[i]
      if (!otherSet.has(item)) {
        return false
      }
    }
    return true
  }
}

// 测试
// 创建一个对象
var set = new Set()

// add
// alert(set.add('abc'))
// alert(set.add('abc'))
// alert(set.add('cba'))
// alert(set.add('nba'))
// alert(set.add('mba'))
// alert('获取当前所有元素add：' + set.values())
// console.log(set)

// delete
// alert(set.remove('mba'))
// alert(set.remove('mba'))
// alert('获取当前所有元素remove：' + set.values())

//has
// alert(set.has('abc'))
// alert('获取当前所有元素has：' + set.values())

// size
// alert(set.size())
// set.clear() 
// alert(set.size())

// 1.创建两个集合，并添加元素
var setA = new Set()
setA.add('abc') // 判断是否是子集时使用的
setA.add('cba')
setA.add('nba')
var setB = new Set()
setB.add('aaa')
setB.add('nba')
setB.add('cba')

// 2.求两个集合的并集
var unionSet = setA.union(setB)
alert(unionSet.values())
console.log('unionSet:', unionSet)

// 3.求两个集合的交集
var intersectionSet = setA.intersection(setB)
alert(intersectionSet.values())
console.log('intersectionSet:', intersectionSet)

// 4.求两个集合的差集
var differenceSet = setA.difference(setB)
alert(differenceSet.values())
console.log('differenceSet:', differenceSet)

// 5.判断两者是否是自己关系
var isSubset = setA.subset(setB)
alert(isSubset)
console.log('isSubset:',isSubset)