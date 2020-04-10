/**
 * 迭代器模式
 * 作用：1，
*/
var arr = ["1", "2", "3"]
var diedaiqi = (function () {
  var length = arr.length
  index = 0
  return {
    hasNext: function () {
      return index < length
    },
    next: function () {
      var data = arr[index]
      index = index + 1
      return data
    }
  }
})()

while (diedaiqi.hasNext()) {
  console.log(diedaiqi.next())
}

/** 迭代器应用场景
 * $each(arr,function(index,arr){
 *    console.log(index)
 *    console.log(val)
 * })
*/