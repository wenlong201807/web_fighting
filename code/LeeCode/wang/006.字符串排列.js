/**
 * 006 字符串排列
 * 题目：
 * 输入一个字符串，按字典序打印出该字符串中字符的所有排列
 * 例如：输入字符串abc，则打印出有字符a,b,c所能佩列出来的所有字符串 abc,acb,bac,bca,cab,cba。
 * 
 * 思路：
 * 使用回溯法：
 * 记录一个字符(temp),用于储存当前需要进入排列的字符
 * 记录一个字符串(current),用于记录当前已经排列好的字符
 * 记录一个队列(queue),用于储存还未被排列的字符
 * 
 * 1.每次排列将temp 添加到current
 * 2.如果queue为空，则本次排列完成，将current加入到结果数组中，结束递归
 *   如果queue不为空，说明还有未排列的字符
 * 3.递归排列queue中剩余的字符
 * 
 * 为了不影响后续排列，每次递归完成，将当前递归的字符temp加回队列
 * 
*/
// 代码1 记录一个当前排列字符temp
function Permutation (str) {
  const result = []
  if (str) {
    queue = str.split('')
    Permutation(queue, result)
  }
  result.sort()
  return [...new Set(result)]
}

function PermutationCore (queue, result, temp = "", current = "") {
  current += temp
  if (queue.length === 0) {
    result.push(current)
    return
  }
  for (let i = 0; i < queue.length; i++) {
    temp = queue.shift()
    PermutationCore(queue, result, temp, current)
    queue.push(temp)
  }
}

// 代码2 记录一个当前索引，不断交换数组中的元素，(不太好理解)
function Permutation2 (str) {
  var result = []
  if (!str) {
    return result
  }
  var array = str.split('')
  permutate(array, 0, result)
  result.sort()
  return [...new Set(result)]
}

function permutate (array, index, result) {
  if (array.length - 1 === index) {
    result.push(array.join(""))
  }
  for (let i = 0; i < array.length; i++) {
    swap(array, index, i)
    permutate(array, index + 1, result)
    swap(array, i, index)
  }
}