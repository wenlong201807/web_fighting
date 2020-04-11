
let aa = [
  {type:'a',name:'n1',path:'p1'},
  {type:'a',name:'n2',path:'p1'},
  {type:'b',name:'m1',path:'p1'},
  {type:'b',name:'m2',path:'p1'}
]

let arr1 = []
let hh = new Map()
aa.map(item => {
  // console.log(item)
  if (hh.has(item.type)) {
    hh.set(item.type,hh.get(item.type) +'---'+item.name+':'+item.path)
  } else {
    hh.set(item.type,item.name+':'+item.path)
  }
})
// console.log(hh)


console.log('数组一',typeof Array.from(hh),Array.from(hh))

let arr2 = []
Array.from(hh).map(item => {
  console.log('item[0]:',item[0])
  let obj = {}
  obj.type = item[0]
// obj[item[0]] = item[0]
// obj['child'] = item[1].split('---').join(':').split(':')
  obj['child'] =   arrToObj(item[1].split('---').join(':').split(':'))
// obj['child'] =   item[1]
  arr2.push(obj)
})

console.log('最后结果',arr2)
// ReorganizationData
// arr3 = arr2.map(item => {
//   // console.log(item.child)
//   // let kk = item.child.split('---')
//   // // console.log(kk)
//   // let bb = kk.join(':')
//   // // console.log('******', bb)
//   // let cc = bb.split(':')
//   // console.log('******', cc)
// console.log('item',item)
// let obj = {}
// obj[item.a] = item.a
// obj['child'] = item.child.split('---').join(':').split(':')
// return obj
// })
// console.log('arr3',arr3)

let child1 = ['n1', 'p1', 'n2', 'p1']
function arrToObj(arr){
  let len = arr.length
  let child = []
  let i = 0
  while (i<len) {
    let obj = {}
    obj['name'] = arr[i]
    obj['path'] = arr[i + 1]
    child.push(obj)
    i = i+2
  }
  return child
}
// console.log('++++',arrToObj(child1))









