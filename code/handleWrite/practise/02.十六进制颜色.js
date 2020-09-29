// 实现输出一个十六进制的随机颜色(#af0128)

function getColor () {
  let color = ''
  for (let i = 0; i < 6; i++){
    color += ((Math.random()*16)>>0).toString(16)
  }
  return `#${color}`
}

console.log(getColor())