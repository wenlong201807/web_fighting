// 版本比较大小

/**
算法题：Semantic Versioning 是一个前端通用的版本规范。
格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”，
要求实现 compare(a, b) 方法，比较 a, b 两个版本大小，
  1. 当 a > b 是返回 1；
  2. 当 a = b 是返回 0；
  3. 当 a < b 是返回 -1；
  4. 其中，rc > beta > alpha，major > minor > patch；
  5. 例子，1.2.3 < 1.2.4 < 1.3.0-alpha.1 < 1.3.0-alpha.2 < 1.3.0-beta.1 < 1.3.0-rc.1 < 1.3.0
*/
const compare = (version1, version2) => {
  let aArr = string2Arr(version1)
  let bArr = string2Arr(version2)
  let len = aArr.length >= bArr.length ? aArr.length : bArr.length
  for (let i = 0; i < len; i++) {
    if (i >= 3) {
      aArr[i] = word2Num[aArr[i]]
      bArr[i] = word2Num[bArr[i]]
    }
    if (aArr[i] === bArr[i]) {
      continue
    } else {
      return aArr[i] > bArr[i] ? 1 : -1
    }
  }
  return 0
}

// let str = '1.3.0-alpha.1'
const string2Arr = str => str.replace('-', '.').split('.')
// console.log('string2Arr:', string2Arr(str))
const word2Num = { alpha: 1, beta: 2, rc: 3, undefined: 4 }

// console.log(compare('1.2.3', '1.2.4')) // -1
// console.log(compare('1.2.3', '1.2.3')) // 0
// console.log(compare('1.2.4', '1.2.3')) // 1
// console.log(compare('1.3.0-alpha.2', '1.3.0-alpha.1')) // 1
// console.log(compare('1.3.0-alpha.2', '1.3.0-beta.1')) // -1
// console.log(compare('1.3.0', '1.3.0-beta.1')) // 1
// console.log(compare('1.3.0-rc', '1.3.0-beta.1')) // 1
// console.log(compare('1.01', '1.001')) // 1

// let test = ['1.2.3', '1.2.4']
// let test = ['1.3.0-alpha.2', '1.3.0-alpha.1']
let test = ['1.3.0-alpha.2', '1.3.0-beta.1']
let sortAfter = test.sort((a, b) => a - b)
// console.log(sortAfter)

const compareVersion = (version1, version2) => {
  if (version1 === version2) return 0
  if (version1.includes(version2)) return -1
  if (version2.includes(version1)) return 1
  version1 = version1.replace('alpha', '0').replace('beta', '1').replace('rc', '2')
  version2 = version2.replace('alpha', '0').replace('beta', '1').replace('rc', '2')
  return version1 > version2 ? 1 : -1
}

// console.log(compare2('1.2.3', '1.2.4')) // -1
// console.log(compare2('1.2.3', '1.2.3')) // 0
// console.log(compare2('1.2.4', '1.2.3')) // 1
// console.log(compare2('1.3.0-alpha.2', '1.3.0-alpha.1')) // 1
// console.log(compare2('1.3.0-alpha.2', '1.3.0-beta.1')) // -1
// console.log(compare2('1.3.0', '1.3.0-beta.1')) // 1
// console.log(compare2('1.3.0-beta.1', '1.3.0')) // -1
// console.log(compare2('1.3.0-rc', '1.3.0-beta.1')) // 1
console.log(compareVersion('1.01', '1.001'))