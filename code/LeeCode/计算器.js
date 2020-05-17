/**
 * 实现一个计算器
 * https://mp.weixin.qq.com/s?__biz=Mzg2NzA4MTkxNQ==&mid=2247486785&idx=3&sn=75e57902eb8fce5f9d74cfd11072ee44&chksm=ce404695f937cf8311f6bf2a260d857b524e2f39575dd458857c4c0208d53df84318632410ab&mpshare=1&scene=1&srcid=0517ysxesr3nhodcJS1LKkf2&sharer_sharetime=1589678349738&sharer_shareid=f8d25c6b3b3b5f92cb53a2ecd9878784&key=74a1d1c7636e53d31193aad45d69c25bb01e04f026fc4620e2e3a20e203c288902b132fede6d080502be2f479ead4ec1a334390e27960b1e39b47ca5632b7ce52167320cb44b10e86c7548f83b9232da&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=AWW2xotLmcS1QgPbRBncOq8%3D&pass_ticket=owyTmFkeWCfMUhpuqgXb2gKQHf3U2%2BKV6CSUwhD582p7w5dzAWSw4YSbGm4Ma9ui
 * 
 * 
 * 参考资料
 * 判断一个字符是否是数字 https://blog.csdn.net/qq_29176825/article/details/77987639
*/

function calculate (s) {

  console.log('s:', s)
  let len = s.length
  let stk = []
  let num = 0
  let sign = '+'
  let i = 0
  // debugger
  while (i <= len) {
    let c = s[i]
    console.log('c', i, s[i], c, !isNaN(c), 'sing:', sign, 'num:', num)
    // console.log('typeof num:', typeof num)
    if (!isNaN(c)) {

      num = 10 * num + Number(c)

    } else {

      // i = i + 1
      console.log('num:', num)
      console.log('sign:', sign)

      if (i <= len) {
        let pre
        switch (sign) {

          case '+':
            console.log('添加正数')
            stk.push(num);
            break;
          case '-':
            console.log('添加负数')
            stk.push(-num)
            break
          case '*':
            console.log('添加乘数')
            pre = stk.pop()
            // stk.pop()
            stk.push(pre * num)
            // stk[len - 1] = stk[len - 1] * num
            break
          case '/':
            console.log('添加除数')
            pre = stk.pop()
            // stk.shift()
            stk.push(Math.floor((pre / num)))
            // stk[len - 1] = Math.floor(stk[len - 1] / num)
            break
        }
        console.log('加入的一个元素：', stk, '添加之后：', c, s[i], i)
        sign = c
        num = 0
        console.log(66, sign, num)
      }
    }

    i = i + 1
  }

  console.log('stk:', stk)
  let res = 0
  while (stk.length) {
    let cur = stk.shift()
    console.log(cur)
    res += cur
    // stk.unshift()
  }
  return res
}

const s = '54+2*96/3'
console.log(calculate(s))





