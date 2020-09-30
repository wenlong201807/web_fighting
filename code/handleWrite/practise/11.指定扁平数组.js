
let arr = [
  [1,4,7],
  [2,5,8],
  [3,6,9],
]

const hh = arr => {
  let outLen = arr.length
  let inLen = arr[0].length
  let result = []
  if(outLen===1) return arr[0]
  for (let i = 0; i < inLen; i++){
    for (let j = 0; j < outLen; j++){
      result.push(arr[j][i])
    }
  }
  return result
}

console.log(hh(arr))