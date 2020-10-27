// s 数组：需要求组合的集合
// k 取数元素个数

function combination (s, k) {
  if (k === 0 || s.length === k) {
    return [s.slice(0,k)]
  }

  const [first, ...others] = s
  let r = []
  r = r.concat(combination(others,k-1).map(c => [first,...c]))
  r = r.concat(combination(others,k))
  return r
}

const s = ['a','b','c','d']
// console.table(combination(s,2))
console.table(combination(s,3))
// console.table(combination(s,4))
// console.table(combination(s,1))