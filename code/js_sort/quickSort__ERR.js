// 快速排序
var arr = [5, 9, 6, 7, 3, 8, 5]

// 1. 选择枢纽
function median (left, right) {
  // 1. 取出中间的位置
  var center = Math.floor((left + right) / 2)

  // 2. 判断大小，并且进行交换
  if (arr[left] > arr[center]) {
    swap(left, center)
  }
  if (arr[center] > arr[right]) {
    swap(center, right)
  }
  if (arr[left] > arr[right]) {
    swap(left, right)
  }

  // 3. 将center换到 right - 1 的位置
  swap(center,right-1)

  return arr[right-1]
}

function quickSort (arr) {
  quick(0, arr.length - 1)
  return arr
}

function quick (left, right) {
  // 1. 结束条件
  if (left >= right) return
  
  // 2. 获取枢纽
  var pivot = median(left,right)

  // 3. 定义变量，用于记录当前找到的位置
  var i = left
  var j = right - 1
  
  // 4. 开始进行交换
  while (true) {
    while(arr[++i] < pivot){}
    while (arr[--j] < pivot) { }
    if (i < j) {
      swap(i,j)
    } else {
      break
    }
  }

  // 6. 将枢纽放置在正确的位置，i的位置
  swap(i, right - 1)
  
  // 7. 分而治之
  quick(left,i-1)
  quick(i+1,right)
}

// 交换函数
function swap (left, right) {
  var temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

// 测试

console.log(quickSort(arr))

